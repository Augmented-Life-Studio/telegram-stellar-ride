import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/store/hooks'
import { AppPath } from '@/sdk/interfaces'
import { useMeQuery } from '@/store/user/user.api'
import { useWeb3 } from '@/context/Web3ProviderContext'
import { Flex, Stars } from '@/uikit'
import TopBar from './TopBar'

interface LayoutProps {
  children: React.ReactNode
}

/**
 * This component renders the main application layout for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves user data and Web3 context.
 * - Checks if the user's wallet is already added.
 * - Redirects to a loading screen if the user is not authenticated.
 * - Polls user data at regular intervals.
 *
 * @component
 * @returns {JSX.Element} The rendered AppLayout component.
 *
 * @example
 * <AppLayout>
 *   <YourComponent />
 * </AppLayout>
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useRouter` for navigation.
 * - `useAppSelector` for accessing the Redux store.
 * - `useWeb3` for Web3 context.
 * - `useMeQuery` for querying user data.
 *
 * The component conditionally redirects to a loading screen if the user is not authenticated and renders the main layout otherwise.
 */
const AppLayout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { push, pathname } = useRouter()
  const { user, accessToken } = useAppSelector((state) => state.user)
  const { account } = useWeb3()

  const isWalletInAddresses = !!user?.addresses?.find((item) => item.wallet === account?.toLowerCase())
  const shouldSkip = !accessToken || !user?.userId

  useMeQuery({ accessToken, userId: user?.userId, account }, { skip: shouldSkip, pollingInterval: 240000 })

  useEffect(() => {
    if (pathname !== AppPath.LOADING && !accessToken && !account) {
      push(AppPath.LOADING)
    }
  }, [accessToken, pathname, account, isWalletInAddresses])

  return (
    <>
      <Flex flexDirection="column" style={{ position: 'relative', height: '100vh', overflowX: 'hidden' }}>
        <Stars
          style={{
            position: 'fixed',
            top: '50%',
            left: 0,
            width: '100%',
            height: 'auto',
            zIndex: 0,
            transform: 'translateY(-30%)',
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Flex height="80px">
            <TopBar />
          </Flex>
          <Flex
            flexDirection="column"
            overflowY="auto"
            overflowX="hidden"
            height="calc(100vh - 80px)"
            pt="20px"
            px="30px"
          >
            {children}
          </Flex>
        </div>
      </Flex>
    </>
  )
}

export default AppLayout
