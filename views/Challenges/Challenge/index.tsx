import GeneralPlayerBox from '@/components/GeneralPlayerBox'
import { ChallengeData } from '@/components/PlayersView/types'
import useRefresh from '@/hooks/useRefresh'
import { AppPath, AuctionState, ChallengeStatus } from '@/sdk/interfaces'
import { useAppSelector } from '@/store/hooks'
import {
  useGetChallengeUsersByUserIdAndChallengeIdQuery,
  useGetScoresChallengeCountQuery,
  useRegisterUserChallengeMutation
} from '@/store/leaderboard/leaderboard'
import { useGetNftListQuery } from '@/store/nft/nft.api'
import { ArrowOpen, Button, Flex, RegisterModal, Text, TextVariant, useModal } from '@/uikit'
import { AuctionTimeframe, AuctionTimeframeSize } from '@/uikit/components/AuctionTimeframe'
import { ChallengeStatusBadge } from '@/uikit/components/ChallengeRow'
import { determinateChallengeStatus } from '@/utils/determinateChallengeStatus'
import { formatDateRange } from '@/utils/formatDateRange'
import { getTimeDifferenceDuration } from '@/utils/getTimeDifferenceDuration'
import { isArrayPopulated } from '@/utils/isArrayPopulated'
import {
  useRichScoresByLeaderboardId,
  useRichScoresByUserIdAndLeaderboardId
} from '@/views/Leaderboard/leaderboard.logic'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import Draggable from 'react-draggable'
import { useTranslation } from 'react-i18next'
import styled, { useTheme } from 'styled-components'

const ListWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  gap: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const AssetsWrapper = styled(Flex)`
  gap: 4px;
  width: 100%;
  height: 84px;
`

const AbsoluteContainer = styled(Flex)`
  position: absolute;
  top: 0px;
  left: 0px;
  gap: 4px;
`

/**
 * This component renders the Challenge view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves user data and challenge information.
 * - Determines the challenge status based on start and end dates.
 * - Fetches the best players and the user's score for the challenge.
 * - Displays the challenge timeframe and status.
 * - Provides navigation to the list of all players and to join the challenge.
 *
 * @component
 * @returns {JSX.Element} The rendered Challenge component.
 *
 * @example
 * <Challenge game={gameData} challenge={challengeData} />
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useRefresh` for refreshing data.
 * - `useTranslation` for internationalization.
 * - `useTheme` for accessing the theme.
 * - `useRouter` for navigation.
 * - `useAppSelector` for accessing the Redux store.
 * - `useRichScoresByLeaderboardId` for fetching leaderboard scores.
 * - `useRichScoresByUserIdAndLeaderboardId` for fetching user's scores.
 * - `useGetScoresChallengeCountQuery` for fetching the count of scores in the challenge.
 *
 * The component conditionally renders different sets of player boxes based on loading states and data availability.
 */
const Challenge: React.FC<ChallengeData> = ({ game, challenge }) => {
  const { slowRefresh } = useRefresh()
  const { t } = useTranslation()
  const { colors } = useTheme()
  const { push } = useRouter()
  const userData = useAppSelector((state) => state.user)

  const challengeStatus = useMemo(
    () => determinateChallengeStatus(challenge?.startDate, challenge?.endDate),
    [slowRefresh, challenge?.challengeId, determinateChallengeStatus]
  )

  const { data: nftAssetsData } = useGetNftListQuery(
    {
      tokens: challenge?.allowedAssets?.map((asset) => {
        return {
          contractAddress: challenge.contractAddress,
          tokenId: asset
        }
      })
    },
    {
      skip: !challenge?.allowedAssets || !challenge?.contractAddress
    }
  )

  const { data: nftAddonsData } = useGetNftListQuery(
    {
      tokens: challenge?.allowedAddons?.map((asset) => {
        return {
          contractAddress: challenge.contractAddress,
          tokenId: asset
        }
      })
    },
    {
      skip: !challenge?.allowedAddons || !challenge?.contractAddress
    }
  )

  const SNAP_SIZE = useMemo(() => 88, [])
  const SWIPE_BOUND = useMemo(
    () => (-nftAssetsData?.results?.length + -nftAddonsData?.results?.length) * 44,
    [nftAssetsData?.results?.length, nftAddonsData?.results?.length]
  )

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = () => {
    setIsDragging(false)
  }

  const handleDrag = (e: any, data: any) => {
    if (Math.abs(data.x - position.x) > 5) {
      setIsDragging(true)
    }
  }

  const handleDragStop = (e: any, data: any) => {
    const snappedX = Math.round(data.x / SNAP_SIZE) * SNAP_SIZE
    setPosition({ x: snappedX, y: 0 })
  }

  const {
    data: bestPlayers,
    isLoading,
    refetch: refetchBestPlayers
  } = useRichScoresByLeaderboardId(
    {
      leaderboardId: game.leaderboardId,
      limit: 3,
      startedFrom: challenge?.startDate,
      endedTo: challenge?.endDate,
      challengeId: challenge?.challengeId
    },
    { refetchOnMountOrArgChange: true }
  )

  const {
    data: myScore,
    isLoading: isLoadingBestScore,
    refetch: refetchMyScore
  } = useRichScoresByUserIdAndLeaderboardId(
    {
      leaderboardId: game.leaderboardId,
      userId: userData?.user?.userId,
      scoresBefore: 1,
      scoresAfter: 1,
      startedFrom: challenge.startDate,
      endedTo: challenge.endDate,
      challengeId: challenge.challengeId
    },
    {
      skip: !userData?.user?.userId,
      refetchOnMountOrArgChange: true
    }
  )

  const { data: challengesCountData, refetch: refetchChallengeCount } = useGetScoresChallengeCountQuery(
    {
      leaderboardId: game.leaderboardId,
      startedFrom: challenge.startDate,
      endedTo: challenge.endDate,
      challengeId: challenge.challengeId
    },
    { refetchOnMountOrArgChange: true }
  )

  const sortOrder = [1, 2, 3]

  const {
    data: userChallengeData,
    isLoading: isLoadingUserChallenge,
    refetch: refetchUserChallenge
  } = useGetChallengeUsersByUserIdAndChallengeIdQuery(
    {
      userId: userData?.user?.userId,
      challengeId: challenge.challengeId
    },
    { skip: !userData?.user?.userId, refetchOnMountOrArgChange: true }
  )
  const [registerUserChallenge, { isLoading: isLoadingRegister }] = useRegisterUserChallengeMutation()

  const handleRegisterUserChallenge = async () => {
    if (userChallengeData || !challenge.isRegistrationRequired) {
      Telegram.WebApp.openLink(
        `https://metapro.one/app/inWalletApps?platformId=${process.env.NEXT_PUBLIC_METAPRO_PLATFORM_ID}`
      )
    } else {
      openRegisterModal()
    }
  }

  const handleRegister = async () => {
    if (!isLoadingUserChallenge && !isLoadingRegister && !userChallengeData) {
      await registerUserChallenge({
        challengeId: challenge.challengeId,
        userId: userData?.user?.userId,
        leaderboardId: game.leaderboardId
      })
      await refetchUserChallenge()
      refetchChallengeCount()
      refetchBestPlayers()
      refetchMyScore()
      closeRegisterModal()
    }
  }

  const [openRegisterModal, closeRegisterModal] = useModal({
    content: <RegisterModal handleRegister={handleRegister} />,
    type: 'center',
    enableDismissButton: true
  })

  const getBestPlayersViewContent = useMemo(() => {
    switch (true) {
      case isLoading:
        return (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <GeneralPlayerBox key={index} {...{ isLoading }} />
            ))}
          </>
        )
      case !isArrayPopulated(bestPlayers?.results):
        return (
          <>
            {Array.from(sortOrder).map((_, index) => (
              <GeneralPlayerBox key={index} {...{ isLoading }} />
            ))}
          </>
        )
      default:
        return (
          <>
            {bestPlayers?.results
              .sort((a, b) => sortOrder.indexOf(a.userScore.position) - sortOrder.indexOf(b.userScore.position))
              .map((player) => (
                <GeneralPlayerBox key={player.userScore.matchId} player={player} {...{ isLoading }} />
              ))}
          </>
        )
    }
  }, [isLoading, bestPlayers, sortOrder])

  const getMyScoreViewContent = useMemo(() => {
    switch (true) {
      case isLoadingBestScore:
        return (
          <>
            {Array.from({ length: 1 }).map((_, index) => (
              <GeneralPlayerBox key={index} {...{ isLoadingBestScore }} />
            ))}
          </>
        )
      case !isArrayPopulated(myScore?.results):
        return (
          <>
            {Array.from([1]).map((_, index) => (
              <GeneralPlayerBox key={index} {...{ isLoadingBestScore }} />
            ))}
          </>
        )
      default:
        return (
          <>
            {myScore?.results
              .filter((item) => item?.user?.userId === userData?.user?.userId)
              .map((player) => (
                <GeneralPlayerBox key={player.userScore.matchId} player={player} {...{ isLoadingBestScore }} />
              ))}
          </>
        )
    }
  }, [isLoadingBestScore, myScore, sortOrder])

  const timeframeComponent = useMemo(() => {
    const now = new Date()
    switch (challengeStatus) {
      case undefined:
        return null
      case ChallengeStatus.ACTIVE:
        return (
          <AuctionTimeframe
            time={getTimeDifferenceDuration(now, challenge.endDate)}
            currentAuctionState={AuctionState.ACTIVE}
            showLabel={false}
            size={AuctionTimeframeSize.SMALL}
          />
        )
      default:
        return (
          <Text color={colors.score} variant={TextVariant.BODY_DEFAULT_BOLD}>
            {formatDateRange(challenge.startDate, challenge.endDate)}
          </Text>
        )
    }
  }, [challengeStatus, slowRefresh, challenge?.challengeId, getTimeDifferenceDuration])

  return (
    <Flex flexDirection="column" alignItems="center" width="100%" flex="1" height="calc(100vh - 80px)" gap="8px">
      <Flex flexDirection="column" alignItems="center" width="100%" gap="8px">
        <Flex flexDirection="column" width="100%">
          <Flex alignItems="flex-end" justifyContent="space-between" width="100%">
            <Text mb="8px" variant={TextVariant.H5}>
              {t('challenge.title')}
            </Text>
            {challenge?.pricePool && (
              <Flex flexDirection="column" pb="8px">
                <Text
                  variant={TextVariant.TEXT_XS_MEDIUM}
                  color={colors.score}
                  textTransform="uppercase"
                  textAlign="end"
                >
                  {t('challenges.prizePool')}
                </Text>
                <Text variant={TextVariant.H5} textTransform="uppercase" textAlign="end">
                  {challenge?.pricePool}
                </Text>
              </Flex>
            )}
          </Flex>
          <Flex justifyContent="space-between">
            {timeframeComponent}
            <ChallengeStatusBadge {...{ challengeStatus }} />
          </Flex>
        </Flex>
      </Flex>
      <ListWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Flex flexDirection="column" width="100%" gap="12px">
          {(nftAssetsData?.results || nftAddonsData?.results) && (
            <>
              <Flex alignItems="center" width="100%">
                <Text variant={TextVariant.BODY_DEFAULT_BOLD}>{t('challenge.requiredAssets')}</Text>
              </Flex>
              <Flex position="relative" alignItems="center" width="100%" gap="4px">
                <AssetsWrapper />
                <Draggable
                  axis="x"
                  position={position}
                  onStart={handleDragStart}
                  onDrag={handleDrag}
                  onStop={handleDragStop}
                  bounds={{ left: SWIPE_BOUND, right: 0 }}
                >
                  <AbsoluteContainer>
                    {nftAssetsData?.results?.map((item) => (
                      <Flex key={item?.token?._tokenId} borderRadius="8px" overflow="hidden">
                        <Image src={item?.token?.image} alt={item?.token?.tokenName} width={84} height={84} />
                      </Flex>
                    ))}
                    {nftAddonsData?.results?.map((item) => (
                      <Flex key={item?.token?._tokenId} borderRadius="8px" overflow="hidden">
                        <Image src={item?.token?.image} alt={item?.token?.tokenName} width={84} height={84} />
                      </Flex>
                    ))}
                  </AbsoluteContainer>
                </Draggable>
              </Flex>
            </>
          )}

          <Flex alignItems="center" width="100%" gap="12px">
            <Flex width="100%">
              <Flex
                background="rgba(0, 0, 0, 0.2)"
                borderRadius="16px"
                width="100%"
                px="16px"
                py="8px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex flexDirection="column">
                  <Text textTransform="uppercase" color={colors.score} variant={TextVariant.BODY_SMALL_MEDIUM}>
                    {t('challenge.players')}
                  </Text>
                  <Text variant={TextVariant.H5}>{bestPlayers.count}</Text>
                </Flex>
                {isArrayPopulated(bestPlayers?.results) && (
                  <ArrowOpen
                    onClick={() => {
                      push(AppPath.CHALLENGES + '/' + challenge.challengeId + '/players')
                    }}
                  />
                )}
              </Flex>
            </Flex>
            <Flex width="100%">
              <Flex background="rgba(0, 0, 0, 0.2)" borderRadius="16px" width="100%" px="16px" py="8px">
                <Flex flexDirection="column">
                  <Text textTransform="uppercase" color={colors.score} variant={TextVariant.BODY_SMALL_MEDIUM}>
                    {t('challenge.gameplays')}
                  </Text>
                  <Text variant={TextVariant.H5}>{challengesCountData || 0}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection="column" alignItems="center" width="100%" gap="24px" pb="44px">
          <Flex flexDirection="column" gap="8px" width="100%">
            <Text variant={TextVariant.BODY_DEFAULT_BOLD}>{t('challenge.bestScore')}</Text>
            <Flex flexDirection="column" gap="4px">
              {getBestPlayersViewContent}
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap="8px" width="100%" pb="24px">
            <Text variant={TextVariant.BODY_DEFAULT_BOLD}>{t('challenge.myBestScore')}</Text>
            <Flex flexDirection="column" gap="4px">
              {getMyScoreViewContent}
            </Flex>
          </Flex>
          <Button onClick={handleRegisterUserChallenge} textVariant={TextVariant.H5}>
            {userChallengeData || !challenge.isRegistrationRequired ? t('challenge.join') : t('challenge.register')}
          </Button>
        </Flex>
      </ListWrapper>
    </Flex>
  )
}

export default Challenge
