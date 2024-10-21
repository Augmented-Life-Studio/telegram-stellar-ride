import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import isEmpty from 'lodash/isEmpty'
import { AvatarBorder, Flex, LeaderboardBox, Text, TextVariant } from '@/uikit'
import { shortenAddress } from '@/utils/shortenText'
import { UserScore } from '@/sdk/interfaces'
import { ThumbnailImage } from '@/uikit/components/ThumbnailImage'
import { loadingAnimation } from './general'

const MainWrapper = styled(Flex)<{ disabled?: boolean }>`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 71px;

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  `}
`

const ContentWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
`

const LeaderboardBoxWrapper = styled(LeaderboardBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 100%;
`

const LoadingWrapper = styled(MainWrapper)`
  animation: ${loadingAnimation} 2s ease-in-out infinite;
`

const ImageWrapper = styled(Flex)`
  width: 61.52px;
  height: 57.98px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

const ScoreWrapper = styled(Flex)`
  width: 30px;
  justify-content: center;
  padding-left: 24px;
  padding-right: 12px;
`

interface GeneralPlayerBoxProps {
  player?: UserScore
  isLoading?: boolean
}

/**
 * This component renders the GeneralPlayerBox view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Displays player information including username, avatar, and score.
 * - Shows a loading state while player data is being fetched.
 * - Adjusts the opacity of text based on whether the leaderboard is empty.
 *
 * @component
 * @param {GeneralPlayerBoxProps} props - The properties for the GeneralPlayerBox component.
 * @returns {JSX.Element} The rendered GeneralPlayerBox component.
 *
 * @example
 * <GeneralPlayerBox player={playerData} isLoading={false} />
 *
 * @remarks
 * This component uses several hooks and utility functions:
 * - `useTranslation` for internationalization.
 * - `isEmpty` to check if the player data is empty.
 * - `shortenAddress` to shorten the wallet address if the username is not available.
 *
 * The component conditionally renders the player box content based on the loading state.
 */
const GeneralPlayerBox: React.FC<GeneralPlayerBoxProps> = ({ player, isLoading }) => {
  const { t } = useTranslation()
  const isLeaderboardEmpty = isEmpty(player)
  const address = player?.user?.addresses[0]?.wallet
  const userName = player?.user?.personalDetails?.username
    ? player?.user?.personalDetails?.username
    : shortenAddress(address)

  const boxContent = (
    <ContentWrapper alignItems="center" justifyContent="space-between" gap="8px">
      <ScoreWrapper>
        <Text variant={TextVariant.BODY_DEFAULT_BOLD}>{player?.userScore.position}.</Text>
      </ScoreWrapper>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Flex gap={'16px'} alignItems="center">
          <ImageWrapper>
            <AvatarBorder style={{ zIndex: 10 }} />
            <ThumbnailImage crop={5} borderRadius="15px" assetPath={player?.user?.personalDetails?.avatar} />
          </ImageWrapper>
          <Flex flexDirection="column" flex="1">
            <Text
              variant={TextVariant.BODY_DEFAULT_BOLD}
              opacity={isLeaderboardEmpty ? '0.6' : '1'}
              isTrimmed
              linesToDisplay={1}
              mr="16px"
            >
              {userName || `${t('general.userName')}`}
            </Text>
          </Flex>
        </Flex>

        <Flex pr="16px">
          <Flex justifyContent="flex-end">
            <Text variant={TextVariant.BODY_DEFAULT_BOLD} opacity={isLeaderboardEmpty ? '0.6' : '1'}>
              {player?.userScore.roundData.score || 'pt'}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </ContentWrapper>
  )

  return (
    <>
      {isLoading ? (
        <LoadingWrapper>
          <LeaderboardBoxWrapper />
          {boxContent}
        </LoadingWrapper>
      ) : (
        <MainWrapper>
          <LeaderboardBoxWrapper />
          {boxContent}
        </MainWrapper>
      )}
    </>
  )
}

export default GeneralPlayerBox
