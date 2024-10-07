import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { Text, TextVariant } from '../Text'
import { AuctionState, LeaderboardState } from '@/sdk/interfaces'
import { Flex } from '../Flex'
import { FlexProps } from '../Flex/types'
import { translation } from '@/utils/translation'

dayjs.extend(duration)

export enum AuctionTimeframeSize {
  REGULAR = 'regular',
  SMALL = 'small',
  SMALL_BOLD = 'small bold',
  XSMALL = 'xsmall',
  H5 = 'h5'
}

const getFontSizeBySize = (size: AuctionTimeframeSize): TextVariant => {
  switch (size) {
    case AuctionTimeframeSize.SMALL:
      return TextVariant.BODY_DEFAULT_BOLD
    case AuctionTimeframeSize.SMALL_BOLD:
      return TextVariant.BODY_SMALL_BOLD
    case AuctionTimeframeSize.XSMALL:
      return TextVariant.TEXT_XS_MEDIUM
    case AuctionTimeframeSize.H5:
      return TextVariant.H5
    default:
      return TextVariant.BODY_BIG_BOLD
  }
}

const PeriodValue = styled(Text).attrs<{ size: AuctionTimeframeSize }>(({ size }) => ({
  variant: getFontSizeBySize(size)
}))<{ size: AuctionTimeframeSize }>`
  color: ${({ theme }) => theme.colors.score};
`

const Period = styled(Text).attrs(() => ({
  variant: TextVariant.TEXT_XS_BOLD
}))`
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.score};
`

const TimeframeContainer = styled(Flex)`
  align-items: center;
`

interface Time {
  months: string
  days: string
  hours: string
  minutes: string
  seconds: string
}

interface InsTimeframeProps extends FlexProps {
  time: Time
  currentAuctionState: AuctionState | LeaderboardState
  size?: AuctionTimeframeSize
  t?: (...props: any) => any
  row?: boolean
  showLabel?: boolean
}

const AuctionTimeframe: React.FC<InsTimeframeProps> = ({
  time,
  currentAuctionState,
  t,
  size = AuctionTimeframeSize.REGULAR,
  row,
  showLabel = true,
  ...props
}) => {
  const getAuctionTimeframePeriodContent = () => {
    switch (true) {
      case currentAuctionState === AuctionState.INCOMING:
        return translation('assetCard.insInfoCard.startsIn', t, 'Starts in')
      case currentAuctionState === AuctionState.ACTIVE:
        return translation('assetCard.insInfoCard.endsIn', t, 'Ends in')
      case currentAuctionState === AuctionState.ENDED:
        return translation('assetCard.insInfoCard.endedSince', t, 'Ended since')
      default:
        return translation('assetCard.insInfoCard.endsIn', t, 'Ends in')
    }
  }

  const dayjsDuration = dayjs.duration({
    months: parseInt(time.months),
    days: parseInt(time.days),
    hours: parseInt(time.hours),
    minutes: parseInt(time.minutes),
    seconds: parseInt(time.seconds)
  })

  return (
    <Flex
      width="max-content"
      flexDirection={row ? 'row' : 'column'}
      alignItems={row ? 'center' : 'initial'}
      justifyContent={row ? 'space-between' : 'initial'}
      gap={row ? '8px' : '0px'}
      {...props}
    >
      {showLabel && <Period>{getAuctionTimeframePeriodContent()}</Period>}
      <Flex gap="8px">
        {dayjsDuration.asSeconds() < 60 ? (
          <Text variant={getFontSizeBySize(size)}>{`< 1min`}</Text>
        ) : (
          <>
            {Object.keys(time).map((val) => {
              if (val === 'seconds') return null
              return (
                <TimeframeContainer key={val}>
                  {/* @ts-ignore  */}
                  <PeriodValue size={size}>{time[val]}</PeriodValue>
                  <Period>{val.charAt(0).toUpperCase()}</Period>
                </TimeframeContainer>
              )
            })}
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default AuctionTimeframe
