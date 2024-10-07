import { useWeb3 } from '@/context/Web3ProviderContext'
import { App } from '@/sdk/interfaces'
import { useAppSelector } from '@/store/hooks'
import {
  useGetScoresCountByUserIdAndLeaderboardIdQuery,
  useGetScoreTotalByUserIdAndLeaderboardIdQuery
} from '@/store/leaderboard/leaderboard'
import { Flex, ProfileBorder, Text, TextVariant, useModal, UsernameSetupModal } from '@/uikit'
import { ThumbnailImage } from '@/uikit/components/ThumbnailImage'
import { UsernameBox } from '@/uikit/components/UsernameBox'
import { shortenAddress } from '@/utils/shortenText'
import { useTranslation } from 'react-i18next'
import styled, { useTheme } from 'styled-components'
import { motion } from 'framer-motion'

const ImageWrapper = styled(Flex)`
  width: 286px;
  height: 284px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

type ProfileProps = {
  game: App
}

/**
 * This component renders the Profile view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves user data and Web3 context.
 * - Displays the user's profile information including avatar and username.
 * - Fetches and displays the user's total score and gameplay count.
 * - Provides a modal for setting up the username.
 *
 * @component
 * @returns {JSX.Element} The rendered Profile component.
 *
 * @example
 * <Profile game={game} />
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useTranslation` for internationalization.
 * - `useTheme` for accessing the theme.
 * - `useAppSelector` for accessing the Redux store.
 * - `useWeb3` for Web3 context.
 * - `useGetScoresCountByUserIdAndLeaderboardIdQuery` for fetching the user's gameplay count.
 * - `useGetScoreTotalByUserIdAndLeaderboardIdQuery` for fetching the user's total score.
 * - `useModal` for handling modals.
 *
 * The component conditionally fetches data based on the user's ID and renders the profile information accordingly.
 */
const Profile: React.FC<ProfileProps> = ({ game }) => {
  const { t } = useTranslation()
  const { account } = useWeb3()
  const { colors } = useTheme()
  const userData = useAppSelector((state) => state.user)

  const displayUserName = userData?.user?.personalDetails?.username || shortenAddress(userData?.account)

  const scoresResponse = useGetScoresCountByUserIdAndLeaderboardIdQuery(
    {
      leaderboardId: game?.leaderboardId,
      userId: userData?.user?.userId
    },
    {
      skip: !userData?.user?.userId
    }
  )

  const scoreTotalResponse = useGetScoreTotalByUserIdAndLeaderboardIdQuery(
    {
      leaderboardId: game?.leaderboardId,
      userId: userData?.user?.userId
    },
    {
      skip: !userData?.user?.userId
    }
  )

  const [openUsernameSetupModal] = useModal({
    content: <UsernameSetupModal />,
    type: 'center',
    enableDismissButton: true
  })

  return (
    <Flex flexDirection="column" alignItems="center" flex="1" height="calc(100vh - 80px)" gap="50px">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: 1 }}
        transition={{ duration: 0.3 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', flex: 1 }}
      >
        <ImageWrapper>
          <ProfileBorder style={{ zIndex: 10 }} />
          <ThumbnailImage crop={5} borderRadius="100px" assetPath={userData?.user?.personalDetails?.avatar} />
        </ImageWrapper>

        <UsernameBox openModal={openUsernameSetupModal}>
          <Flex flexDirection="column">
            <Text variant={TextVariant.H4}>{displayUserName}</Text>
            <Text color={colors.contrast.tertiary} variant={TextVariant.TEXT_XS_MEDIUM}>
              {account}
            </Text>
          </Flex>
        </UsernameBox>

        <Flex width="100%" gap="12px">
          <Flex
            background="rgba(0, 0, 0, 0.2)"
            borderRadius="16px"
            width="100%"
            p="16px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              variant={TextVariant.BODY_SMALL_MEDIUM}
              color={colors.purple}
              textTransform="uppercase"
              textAlign="center"
            >
              {t('profile.myTotalScore')}
            </Text>
            <Text variant={TextVariant.H5} textAlign="center">
              {scoreTotalResponse?.data?.mainScore?.totalRoundData?.score || 0}
            </Text>
          </Flex>
          <Flex
            background="rgba(0, 0, 0, 0.2)"
            borderRadius="16px"
            width="100%"
            p="16px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              variant={TextVariant.BODY_SMALL_MEDIUM}
              color={colors.purple}
              textTransform="uppercase"
              textAlign="center"
            >
              {t('challenge.gameplays')}
            </Text>
            <Text variant={TextVariant.H5} textAlign="center">
              {scoresResponse.data}
            </Text>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  )
}

export default Profile
