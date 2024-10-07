import PlayerView from '@/components/PlayersView'
import { ScoresType } from '@/components/PlayersView/types'
import { App } from '@/sdk/interfaces'
import { Flex, Text, TextVariant } from '@/uikit'
import { useTranslation } from 'react-i18next'

type LeaderboardViewProps = {
  game: App
}

/**
 * This component renders the Leaderboard view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Displays the leaderboard title.
 * - Renders the player view with leaderboard scores.
 *
 * @component
 * @param {LeaderboardViewProps} props - The properties for the Leaderboard component.
 * @returns {JSX.Element} The rendered Leaderboard component.
 *
 * @example
 * <Leaderboard game={game} />
 *
 * @remarks
 * This component uses the following hooks:
 * - `useTranslation` for internationalization.
 *
 * The component displays the leaderboard title and player scores in a flex container.
 */
const Leaderboard: React.FC<LeaderboardViewProps> = ({ game }) => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column" alignItems="center" flex="1" height="calc(100vh - 80px)">
      <Text mb="16px" style={{ width: '100%' }} textTransform="uppercase" variant={TextVariant.H4}>
        {t('leaderboard.title')}
      </Text>

      <PlayerView game={game} type={ScoresType.LEADERBOARD} />
    </Flex>
  )
}

export default Leaderboard
