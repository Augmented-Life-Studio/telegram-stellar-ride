import { AppPath } from '@/sdk/interfaces'
import { useAppSelector } from '@/store/hooks'
import { useTelegramLoginMutation } from '@/store/user/user.api'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// Custom hook to perform initial fetch
/**
 * This hook handles the initial fetch and login process for the Telegram mini-app.
 * It performs the following functionalities:
 * - Retrieves user data from the Redux store.
 * - Initializes the Telegram login mutation.
 * - Checks if the Telegram WebApp is available and performs login if necessary.
 * - Navigates to the login page upon successful login.
 *
 * @hook
 * @returns {void} This hook does not return any value.
 *
 * @example
 * useInitialFetch();
 *
 * @remarks
 * This hook uses several hooks and context providers:
 * - `useAppSelector` for accessing the Redux store.
 * - `useTelegramLoginMutation` for performing the Telegram login mutation.
 * - `useRouter` for navigation.
 *
 * The hook conditionally performs the Telegram login based on the availability of the Telegram WebApp and the presence of user data in the Redux store.
 */
export const useInitialFetch = () => {
  // Get user data from the Redux store
  const userData = useAppSelector((state) => state.user)

  // Initialize the Telegram login mutation
  const [telegramLogin] = useTelegramLoginMutation()

  // Get the router object for navigation
  const { push } = useRouter()

  // Function to check Telegram WebApp and perform login if necessary
  const checkTelegramWebApp = async () => {
    // Check if running in a browser environment and Telegram WebApp is available
    if (typeof window !== 'undefined' && Telegram?.WebApp) {
      const initDataUnsafe = Telegram.WebApp?.initDataUnsafe
      const telegramUser = initDataUnsafe?.user
      const refCode = initDataUnsafe?.start_param

      // If Telegram user exists and no user data in the store, perform login
      if (telegramUser && !userData?.user) {
        await telegramLogin({
          id: telegramUser.id,
          first_name: telegramUser.first_name,
          last_name: telegramUser.last_name,
          username: telegramUser.username,
          telegramSimpleString: Telegram.WebApp?.initData,
          ...(refCode && { referralCode: refCode })
        }).unwrap()
        push(AppPath.LOGIN)
      }
    } else {
      // Retry checking Telegram WebApp after 100ms if not available
      setTimeout(checkTelegramWebApp, 100)
    }
  }

  // useEffect to run the checkTelegramWebApp function on component mount
  useEffect(() => {
    checkTelegramWebApp()
  }, [])
}
