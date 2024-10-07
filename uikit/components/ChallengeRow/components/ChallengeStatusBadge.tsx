import React, { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { Text, TextVariant } from '../../Text'
import { ChallengeStatus } from '@/sdk/interfaces'
import { Flex } from '../../Flex'

const StatusBadge = styled(Flex)`
  width: fit-content;
`

interface ChallengeStatusBadgeProps {
  challengeStatus: ChallengeStatus
}

const ChallengeStatusBadge: React.FC<ChallengeStatusBadgeProps> = ({ challengeStatus }) => {
  const { colors } = useTheme()
  const challengeStatusBadge = useMemo((): {
    badgeBg: string
    badgeColor: string
  } => {
    let badgeBg: string
    let badgeColor: string
    switch (challengeStatus) {
      case ChallengeStatus.INCOMING:
        badgeColor = colors.orange9
        break
      case ChallengeStatus.ACTIVE:
        badgeColor = colors.green9
        break
      case ChallengeStatus.ENDED:
        badgeColor = colors.secondary9
        break
    }
    return { badgeBg, badgeColor }
  }, [challengeStatus])

  return (
    <StatusBadge color={challengeStatusBadge.badgeBg}>
      <Text
        pb="4px"
        variant={TextVariant.BODY_SMALL_BOLD}
        textTransform="uppercase"
        color={challengeStatusBadge.badgeColor}
      >
        {challengeStatus}
      </Text>
    </StatusBadge>
  )
}

export default ChallengeStatusBadge
