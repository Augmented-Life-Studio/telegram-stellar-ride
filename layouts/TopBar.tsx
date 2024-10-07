import React, { useState } from 'react'
import { BackIcon, Button, Flex, SettingsIcon, Text, TextVariant } from '@/uikit'
import { useRouter } from 'next/router'
import { AppPath } from '@/sdk/interfaces'
import { useAppSelector } from '@/store/hooks'
import { useWeb3 } from '@/context/Web3ProviderContext'
import { useTranslation } from 'react-i18next'
import { useCreateReferralCodeMutation, useGetUserReferralCodeQuery } from '@/store/referral/referral.api'
import { logMessage } from '@/utils/logMessage'

/**
 * This component renders the TopBar view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves user data and Web3 context.
 * - Checks if the user's wallet is already added.
 * - Generates and copies a referral link to the clipboard.
 * - Renders different buttons based on the current route and user status.
 *
 * @component
 * @returns {JSX.Element} The rendered TopBar component.
 *
 * @example
 * <TopBar />
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useTranslation` for internationalization.
 * - `useRouter` for navigation.
 * - `useAppSelector` for accessing the Redux store.
 * - `useWeb3` for Web3 context.
 * - `useGetUserReferralCodeQuery` for fetching the user's referral code.
 * - `useCreateReferralCodeMutation` for creating a new referral code.
 *
 * The component conditionally renders different sets of buttons based on the current route, user's wallet status, and connection state.
 */
const TopBar: React.FunctionComponent = () => {
  const [showText, setShowText] = useState(false)
  const { pathname, back, push } = useRouter()
  const { t } = useTranslation()
  const userData = useAppSelector((state) => state.user)
  const web3 = useWeb3()

  const isWalletInAddresses = !!userData?.user?.addresses?.find((item) => item.wallet === web3?.account?.toLowerCase())

  const referralCodeQuery = {
    accessToken: userData?.accessToken as string,
    projectId: process.env.NEXT_PUBLIC_METAPRO_PROJECT_ID as string,
    userId: userData.user?.userId as string
  }
  const {
    data: referralCodeData,
    isLoading,
    refetch
  } = useGetUserReferralCodeQuery(referralCodeQuery, {
    skip: !userData?.accessToken
  })
  const [createCode, { isLoading: isLoadingCreateCode }] = useCreateReferralCodeMutation()

  const handleCopy = async (text: string) => {
    try {
      let refCode = text
      if (isLoading || isLoadingCreateCode || showText) {
        return
      }
      if (!refCode) {
        const generatedRefCode = await createCode(referralCodeQuery).unwrap()
        refCode = generatedRefCode.referralCode
        await refetch()
      }
      await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_TELEGRAM_APP_LINK + '?startapp=' + refCode)
      setShowText(true)

      setTimeout(() => {
        setShowText(false)
      }, 3000)
    } catch (error) {
      logMessage('Failed to copy text: ', error)
    }
  }

  return (
    pathname !== AppPath.LOADING &&
    isWalletInAddresses &&
    !!userData.accessToken &&
    !!web3.account && (
      <Flex justifyContent="space-between" alignItems="center" flex="1" px="30px">
        {pathname !== AppPath.LOGIN ? (
          <Button onClick={back} small>
            <BackIcon />
          </Button>
        ) : (
          <Flex width="48px" />
        )}
        <Flex gap="16px" alignItems="center">
          {pathname !== AppPath.PROFILE && (
            <Button
              onClick={() => {
                push(AppPath.PROFILE)
              }}
              small
            >
              <SettingsIcon />
            </Button>
          )}
          <Button onClick={() => handleCopy(referralCodeData?.referralCode)} buttonWidth="178px">
            <Text variant={TextVariant.SMALL_BUTTON}>
              {!referralCodeData?.referralCode
                ? t('profile.generateLink')
                : showText
                ? t('profile.linkCopied')
                : t('general.inviteFriends')}
            </Text>
          </Button>
        </Flex>
      </Flex>
    )
  )
}

export default TopBar
