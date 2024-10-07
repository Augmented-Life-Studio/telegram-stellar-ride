import React, { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import isNil from 'lodash/isNil'
import { Text, TextVariant } from '../Text'
import ChallengeStatusBadge from './components/ChallengeStatusBadge'
import { AuctionState, ChallengeStatus, RichChallenge } from '@/sdk/interfaces'
import { Flex } from '../Flex'
import { translation } from '@/utils/translation'
import { getTimeDifferenceDuration } from '@/utils/getTimeDifferenceDuration'
import { determinateChallengeStatus } from '@/utils/determinateChallengeStatus'
import { Fn } from '@/utils'
import { AuctionTimeframe, AuctionTimeframeSize } from '../AuctionTimeframe'
import { formatDateRange } from '@/utils/formatDateRange'
import { ChallengeBox } from '../Svg'
import { Button } from '../Button'

const ChallengeWrapper = styled(Flex)`
  padding: 24px 16px;
  position: relative;
  width: 100%;
  height: 170px;
`

const ChallengeBoxWrapper = styled(ChallengeBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 100%;
`

const MyScoreWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
`

interface ChallengeRowProps {
  challenge: RichChallenge
  getMapThumbnailComponent: (mapPath: string) => JSX.Element
  slowRefresh: number
  onClickHandler: Fn
  t?: (key: string, options?: Record<string, any>) => string
}

const ChallengeRow: React.FC<ChallengeRowProps> = ({ challenge, slowRefresh, t, onClickHandler }) => {
  const { colors } = useTheme()
  const { startDate, endDate, personalScore, pricePool } = challenge
  const challengeStatus = useMemo(
    () => determinateChallengeStatus(startDate, endDate),
    [slowRefresh, startDate, endDate, determinateChallengeStatus]
  )
  const timeframeComponent = useMemo(() => {
    const now = new Date()
    switch (challengeStatus) {
      case ChallengeStatus.ACTIVE:
        return (
          <>
            <AuctionTimeframe
              time={getTimeDifferenceDuration(now, endDate)}
              currentAuctionState={AuctionState.ACTIVE}
              showLabel={false}
              size={AuctionTimeframeSize.SMALL}
            />
          </>
        )
      default:
        return (
          <>
            <Text color={colors.score} variant={TextVariant.BODY_DEFAULT_BOLD}>
              {formatDateRange(startDate, endDate)}
            </Text>
          </>
        )
    }
  }, [challengeStatus, slowRefresh, getTimeDifferenceDuration])

  return (
    <ChallengeWrapper>
      <ChallengeBoxWrapper />
      <Flex flexDirection="column" flex="1">
        <Flex flex="1" justifyContent="space-between">
          <Flex>
            <ChallengeStatusBadge {...{ challengeStatus }} />
          </Flex>
          <MyScoreWrapper>
            <Text variant={TextVariant.TEXT_XS_MEDIUM} color={colors.score} textTransform="uppercase">
              {translation('challenges.myScore', t, 'My score')}
            </Text>
            <Text variant={TextVariant.BODY_DEFAULT_BOLD} isTrimmed linesToDisplay={1}>
              {!isNil(personalScore) ? `${personalScore?.roundData?.score} PT` : '-'}
            </Text>
          </MyScoreWrapper>
        </Flex>
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Flex flexDirection="column">
            {pricePool && (
              <Flex flexDirection="column">
                <Text variant={TextVariant.TEXT_XS_MEDIUM} color={colors.score} textTransform="uppercase">
                  {t('challenges.prizePool')}
                </Text>
                <Text variant={TextVariant.H5} textTransform="uppercase">
                  {pricePool}
                </Text>
              </Flex>
            )}
            {timeframeComponent}
          </Flex>

          <Button
            onClick={onClickHandler}
            buttonWidth="108"
            buttonHeight="34"
            textVariant={TextVariant.BODY_DEFAULT_BOLD}
          >
            {translation('challenges.challengeDetails', t, 'Challenge Details')}
          </Button>
        </Flex>
      </Flex>
    </ChallengeWrapper>
  )
}

export default ChallengeRow
