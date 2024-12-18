import { PageWrapper } from '@/uikit/components/PageWrapper'
import { useGetAppByIdQuery } from '@/store/app/app'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Players from '@/views/Challenges/Challenge/Players'
import { useGetChallengeByIdQuery } from '@/store/leaderboard/leaderboard'

export async function getServerSideProps({ locale }) {
  const translations = await serverSideTranslations(locale, ['common'])

  return {
    props: {
      ...translations,
      plain: true
    }
  }
}

/**
 * This component renders the Challenge Players view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves the challenge ID from the URL query parameters.
 * - Fetches the game data using the game ID from environment variables.
 * - Fetches the challenge data using the retrieved challenge ID.
 * - Displays a loading state while fetching data.
 * - Renders the Players component with the fetched game and challenge data.
 *
 * @component
 * @returns {JSX.Element} The rendered Challenge Players component.
 *
 * @example
 * <ChallengePlayersPage />
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useRouter` for accessing the router and query parameters.
 * - `useGetAppByIdQuery` for fetching game data by ID.
 * - `useGetChallengeByIdQuery` for fetching challenge data by ID.
 *
 * The component conditionally renders a loading state while data is being fetched.
 */
const ChallengePlayersPage = () => {
  const {
    query: { challengeId: queryChallengeId }
  } = useRouter()
  const challengeId = queryChallengeId as string

  const gameId = process.env.NEXT_PUBLIC_METAPRO_APP_ID
  const { data: game, isLoading } = useGetAppByIdQuery(gameId)

  const { data: challenge, isLoading: isLoadingChallenge } = useGetChallengeByIdQuery({
    challengeId
  })

  return (
    <PageWrapper loading={isLoading || isLoadingChallenge}>
      <Players game={game} challenge={challenge} />
    </PageWrapper>
  )
}

export default ChallengePlayersPage
