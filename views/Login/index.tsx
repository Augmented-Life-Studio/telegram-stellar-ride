import { useWeb3 } from '@/context/Web3ProviderContext'
import { useSignMessage } from '@/hooks/useSignMessage'
import { AppPath } from '@/sdk/interfaces'
import { useAppSelector } from '@/store/hooks'
import { useAddWalletMutation } from '@/store/user/user.api'
import { Button, Flex, MessageBox, StellarRideLogo, Text, TextVariant } from '@/uikit'
import { getMetaproDeepLink } from '@/utils/getMetaproDeepLink'
import getSignature from '@/utils/getSignature'
import { handleQueryErrorMessage } from '@/utils/handleQueryErrorMessage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

/**
 * This component renders the Login view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves user data and Web3 context.
 * - Checks if the user's wallet is already added.
 * - Opens a link in Telegram when the QR URI changes.
 * - Provides a function to handle adding a wallet.
 * - Renders different buttons based on the user's wallet and connection status.
 *
 * @component
 * @returns {JSX.Element} The rendered Login component.
 *
 * @example
 * <Login />
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useTranslation` for internationalization.
 * - `useTheme` for accessing the theme.
 * - `useRouter` for navigation.
 * - `useAddWalletMutation` for adding a wallet.
 * - `useAppSelector` for accessing the Redux store.
 * - `useWeb3` for Web3 context.
 * - `useSignMessage` for signing messages.
 *
 * The component conditionally renders different sets of buttons based on the user's wallet status and connection state.
 */
export default function Login() {
  const { t } = useTranslation()
  const theme = useTheme()
  const { push } = useRouter()
  const [addWallet, { isLoading, error, reset }] = useAddWalletMutation()

  const userData = useAppSelector((state) => state.user)
  const username = userData?.user?.personalDetails?.username || 'User'

  const web3 = useWeb3()
  const { signMessage } = useSignMessage()

  const isWalletInAddresses = !!userData?.user?.addresses?.find((item) => item.wallet === web3?.account?.toLowerCase())

  useEffect(() => {
    if (web3.qrUri) {
      Telegram.WebApp.openLink(getMetaproDeepLink(web3.qrUri))
    }
  }, [web3.qrUri])

  const handleAddWallet = async () => {
    const { walletAddress, signature, hash } = await getSignature(web3.account, signMessage)

    await addWallet({
      account: walletAddress,
      signature,
      hash,
      accessToken: userData?.accessToken,
      userId: userData?.user?.userId
    })
  }

  const errMsg = handleQueryErrorMessage(t, error)

  const handleDisconnect = () => {
    web3.disconnect()
    reset()
  }

  const Buttons = () => {
    switch (true) {
      case !!errMsg:
        return (
          <Flex flexDirection="column" gap="24px">
            <MessageBox>{errMsg}</MessageBox>
            <Button onClick={handleDisconnect}>{t('home.web3Disconnect')}</Button>
          </Flex>
        )
      case isWalletInAddresses && !!userData.accessToken && !!web3.account:
        return (
          <Flex flexDirection="column" gap="24px">
            <Button onClick={() => push(AppPath.LEADERBOARD)}>{t('leaderboard.title')}</Button>
            <Button onClick={() => push(AppPath.CHALLENGES)}>{t('challenges.title')}</Button>
          </Flex>
        )
      case (web3.isActivating || isWalletInAddresses) && !isLoading:
        return (
          <Flex flexDirection="column" gap="24px">
            <MessageBox>{t('home.web3Connecting')}</MessageBox>
            <Flex height="75px" />
          </Flex>
        )
      case !!web3.account:
        return (
          <Flex flexDirection="column" gap="24px">
            <MessageBox>{t('home.noWallet')}</MessageBox>
            <Button onClick={handleAddWallet}>{t('home.addWalletButton')}</Button>
          </Flex>
        )
      default:
        return (
          <Flex flexDirection="column" gap="24px">
            <MessageBox>
              <Trans i18nKey="home.connect" components={{ br: <br /> }} />
            </MessageBox>
            <Button onClick={web3.connectWalletConnect}>{t('home.connectWalletButton')}</Button>
          </Flex>
        )
    }
  }

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="space-between" flex="1" pb="44px">
      <Flex flexDirection="column" gap="54px">
        <Flex flexDirection="column" style={{ textAlign: 'center' }}>
          <Text variant={TextVariant.H5}>{t('home.welcome1')}</Text>
          <Text color={theme.colors.primary6} variant={TextVariant.H5}>
            {username}
          </Text>
          <Text variant={TextVariant.H5}>{t('home.welcome2')}</Text>
        </Flex>
        <StellarRideLogo />
      </Flex>
      <Flex flexDirection="column" gap="8px" alignItems="center">
        {Buttons()}
      </Flex>
    </Flex>
  )
}
