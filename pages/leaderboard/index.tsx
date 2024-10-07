import { PageWrapper } from '@/uikit/components/PageWrapper'
import { useGetAppByIdQuery } from '@/store/app/app'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Leaderboard from '@/views/Leaderboard'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common']))
    }
  }
}

/**
 * This component renders the Leaderboard view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves game data using the game ID from environment variables.
 * - Displays a loading state while fetching the game data.
 * - Renders the Leaderboard component with the fetched game data.
 *
 * @component
 * @returns {JSX.Element} The rendered Leaderboard component.
 *
 * @example
 * <LeaderboardPage />
 *
 * @remarks
 * This component uses the following hooks:
 * - `useGetAppByIdQuery` for fetching game data by ID.
 *
 * The component wraps the Leaderboard component in a PageWrapper that handles the loading state.
 */
const LeaderboardPage = () => {
  const gameId = process.env.NEXT_PUBLIC_METAPRO_APP_ID
  const { data: game, isLoading } = useGetAppByIdQuery(gameId)

  return (
    <PageWrapper loading={isLoading}>
      <Leaderboard game={game} />
    </PageWrapper>
  )
}

export default LeaderboardPage
