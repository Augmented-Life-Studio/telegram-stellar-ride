import PlayerView from '@/components/PlayersView'
import { ScoresType } from '@/components/PlayersView/types'
import { App, Challenge } from '@/sdk/interfaces'
import { Flex, Text, TextVariant } from '@/uikit'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

type PlayersViewProps = {
  game: App
  challenge: Challenge
}

/**
 * This component renders the Players view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Displays the challenge title and prize pool.
 * - Shows a list of all players in the leaderboard.
 * - Renders the PlayerView component with the appropriate props.
 *
 * @component
 * @param {PlayersViewProps} props - The props for the Players component.
 * @returns {JSX.Element} The rendered Players component.
 *
 * @example
 * <Players game={game} challenge={challenge} />
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useTranslation` for internationalization.
 * - `useTheme` for accessing the theme.
 *
 * The component conditionally renders the prize pool information if it is available.
 */
const Players: React.FC<PlayersViewProps> = ({ game, challenge }) => {
  const { t } = useTranslation()
  const { colors } = useTheme()

  return (
    <Flex flexDirection="column" alignItems="center" flex="1" height="calc(100vh - 80px)">
      <Flex alignItems="flex-end" justifyContent="space-between" width="100%">
        <Text mb="8px" variant={TextVariant.H5}>
          {t('challenge.title')}
        </Text>
        {challenge?.pricePool && (
          <Flex flexDirection="column" pb="8px">
            <Text variant={TextVariant.TEXT_XS_MEDIUM} color={colors.score} textTransform="uppercase" textAlign="end">
              {t('challenges.prizePool')}
            </Text>
            <Text variant={TextVariant.H5} textTransform="uppercase" textAlign="end">
              {challenge?.pricePool}
            </Text>
          </Flex>
        )}
      </Flex>
      <Text mb="16px" style={{ width: '100%' }} textTransform="uppercase" variant={TextVariant.BODY_DEFAULT_BOLD}>
        {t('leaderboard.allPlayers')}
      </Text>

      <PlayerView game={game} type={ScoresType.CHALLENGE} challenge={challenge} />
    </Flex>
  )
}

export default Players
