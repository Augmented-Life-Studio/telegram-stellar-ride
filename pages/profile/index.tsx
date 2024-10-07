import { useGetAppByIdQuery } from '@/store/app/app'
import { PageWrapper } from '@/uikit/components/PageWrapper'
import Profile from '@/views/Profile'
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
 * This component renders the Profile view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves game data using the game ID from environment variables.
 * - Displays a loading state while fetching the game data.
 * - Passes the retrieved game data to the Profile component.
 *
 * @component
 * @returns {JSX.Element} The rendered Profile component.
 *
 * @example
 * <ChallengesPage />
 *
 * @remarks
 * This component uses the following hooks and context providers:
 * - `useGetAppByIdQuery` for fetching game data by ID.
 * - `PageWrapper` for handling the loading state.
 * - `Profile` for displaying the game data.
 */
const ChallengesPage = () => {
  const gameId = process.env.NEXT_PUBLIC_METAPRO_APP_ID
  const { data: game, isLoading } = useGetAppByIdQuery(gameId)

  return (
    <PageWrapper loading={isLoading}>
      <Profile {...{ game }} />
    </PageWrapper>
  )
}

export default ChallengesPage
