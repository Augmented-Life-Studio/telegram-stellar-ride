import { PageWrapper } from '@/uikit/components/PageWrapper'
import { useChallenges } from '@/hooks/useChallenges'
import { useGetAppByIdQuery } from '@/store/app/app'
import Challenges from '@/views/Challenges'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common']))
    }
  }
}

/**
 * This component renders the Challenges view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves the game data using the game ID from environment variables.
 * - Fetches the leaderboard ID from the game data.
 * - Uses the leaderboard ID to fetch challenges.
 * - Displays a loading state while data is being fetched.
 * - Renders the Challenges component with the fetched data.
 *
 * @component
 * @returns {JSX.Element} The rendered Challenges component.
 *
 * @example
 * <ChallengesPage />
 *
 * @remarks
 * This component uses several hooks:
 * - `useGetAppByIdQuery` for fetching game data by ID.
 * - `useChallenges` for fetching challenges based on the leaderboard ID.
 *
 * The component conditionally renders the Challenges component based on the loading state and fetched data.
 */
const ChallengesPage = () => {
  const gameId = process.env.NEXT_PUBLIC_METAPRO_APP_ID
  const { data: game, isLoading } = useGetAppByIdQuery(gameId)
  const leaderboardId = game?.leaderboardId
  const { ...rest } = useChallenges(leaderboardId)

  return (
    <PageWrapper loading={isLoading}>
      <Challenges {...{ ...rest }} {...{ game }} />
    </PageWrapper>
  )
}

export default ChallengesPage
