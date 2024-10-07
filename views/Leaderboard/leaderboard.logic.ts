import { UserScore } from '@/sdk/interfaces'
import { CustomUseLazyQuery } from '@/sdk/interfaces/customLazyQuery.interface'
import {
  ScoresByUserIdAndLeaderboardIdParams,
  ScoresParams,
  useGetScoresByUserIdAndLeaderboardIdQuery,
  useGetScoresQuery,
  useLazyGetScoresQuery
} from '@/store/leaderboard/leaderboard'
import { useGetUserProfilesQuery, useLazyGetUserProfilesQuery } from '@/store/user/user.api'
import omit from 'lodash/omit'
import { useMemo, useState } from 'react'

export const MAX_LIMIT = 9999

/**
 * This hook retrieves and enriches scores data by leaderboard ID for the Telegram mini-app.
 * It handles the following functionalities:
 * - Fetches scores data using the provided leaderboard ID.
 * - Fetches user profiles based on the user IDs from the scores data.
 * - Combines scores data with user profile information to create enriched user scores.
 * - Returns the enriched scores data along with loading states.
 *
 * @function
 * @param {ScoresParams} arg - The parameters required to fetch scores.
 * @param {any} [opt] - Optional parameters for the scores query.
 * @returns {object} The enriched scores data and loading states.
 *
 * @example
 * const { data, isLoading } = useRichScoresByLeaderboardId({ leaderboardId: '123' });
 *
 * @remarks
 * This hook uses several other hooks for data fetching and memoization:
 * - `useGetScoresQuery` for fetching scores data.
 * - `useGetUserProfilesQuery` for fetching user profiles.
 * - `useMemo` for memoizing the enriched user scores.
 *
 * The hook conditionally fetches user profiles based on the success state of the scores query.
 * It also combines the scores data with user profile information to provide a richer dataset.
 */
export const useRichScoresByLeaderboardId = (arg: ScoresParams, opt?: any) => {
  const scoresResponse = useGetScoresQuery(arg, opt)

  const getUserProfilesQuery = useGetUserProfilesQuery(
    {
      userIds: scoresResponse?.data?.results.map((el) => el.userId)
    },
    {
      skip: !scoresResponse.isSuccess
    }
  )

  const userScores = useMemo(() => {
    const userScores: UserScore[] = []
    if (scoresResponse.isSuccess && getUserProfilesQuery.isSuccess) {
      scoresResponse.data.results.forEach((userScore) => {
        const richUserData = getUserProfilesQuery.data.results.find((el) => el.userId === userScore.userId)

        if (richUserData) {
          userScores.push({
            user: richUserData,
            userScore: {
              ...userScore
            }
          })
        }
      })
    }
    return userScores
  }, [scoresResponse, getUserProfilesQuery])

  const richScoresByGameIdQuery = omit(getUserProfilesQuery, ['data', 'isLoading'])

  return {
    data: {
      results: userScores,
      count: scoresResponse.data?.count || 0
    },
    isLoading: getUserProfilesQuery.isLoading || scoresResponse.isLoading,
    ...richScoresByGameIdQuery
  }
}

/**
 * This hook retrieves and enriches scores by user ID and leaderboard ID for the Telegram mini-app.
 * It handles the following functionalities:
 * - Fetches scores based on user ID and leaderboard ID.
 * - Retrieves user profiles for the corresponding user IDs.
 * - Combines the scores with user profile data to create a rich user score object.
 * - Manages loading states and query results.
 *
 * @function
 * @param {ScoresByUserIdAndLeaderboardIdParams} arg - Parameters for fetching scores by user ID and leaderboard ID.
 * @param {any} [opt] - Optional parameters for the query.
 * @returns {object} An object containing enriched user scores, loading states, and query metadata.
 *
 * @example
 * const { data, isLoading } = useRichScoresByUserIdAndLeaderboardId({ userId: '123', leaderboardId: '456' });
 *
 * @remarks
 * This hook uses several queries and handles their results:
 * - `useGetScoresByUserIdAndLeaderboardIdQuery` for fetching scores.
 * - `useGetUserProfilesQuery` for fetching user profiles.
 *
 * The hook combines the results of these queries to provide enriched user scores, including user profile data.
 */
export const useRichScoresByUserIdAndLeaderboardId = (arg: ScoresByUserIdAndLeaderboardIdParams, opt?: any) => {
  const scoresResponse = useGetScoresByUserIdAndLeaderboardIdQuery(arg, opt)
  const getUserProfilesQuery = useGetUserProfilesQuery(
    {
      userIds: scoresResponse?.data?.map((el) => el.userId)
    },
    {
      skip: !scoresResponse.isSuccess
    }
  )
  const userScores: UserScore[] = []

  if (scoresResponse.isSuccess && getUserProfilesQuery.isSuccess) {
    scoresResponse.data.forEach((userScore) => {
      const richUserData = getUserProfilesQuery.data.results.find((el) => el.userId === userScore.userId)

      if (richUserData) {
        userScores.push({
          user: richUserData,
          userScore: {
            ...userScore
          }
        })
      }
    })
  }

  const richScoresByUserIdAndChallengeIdQuery = omit(scoresResponse, ['data', 'isLoading'])

  return {
    data: {
      results: userScores,
      count: scoresResponse.data?.length || 0
    },
    isLoading: getUserProfilesQuery.isLoading || scoresResponse.isLoading,
    ...richScoresByUserIdAndChallengeIdQuery
  }
}

/**
 * This hook provides the logic for fetching and enriching user scores for the Leaderboard view in the Telegram mini-app.
 * It handles the following functionalities:
 * - Fetches user scores using a lazy query.
 * - Fetches user profiles based on the fetched scores.
 * - Combines the scores and profiles to create a rich user score object.
 * - Manages loading and error states during the fetching process.
 *
 * @hook
 * @returns {[
 *   (arg: ScoresParams) => Promise<void>,
 *   {
 *     data: { results: UserScore[]; count: number },
 *     currentData: { results: UserScore[]; count: number },
 *     isLoading: boolean,
 *     isError?: boolean,
 *     error?: any
 *   },
 *   any
 * ]} The enriched user scores, loading state, and error state.
 *
 * @example
 * const [getRichScores, { data, isLoading, isError }, lazyGetScoresPromiseInfo] = useLazyRichScores();
 *
 * @remarks
 * This hook uses several other hooks and utilities:
 * - `useLazyGetScoresQuery` for fetching user scores.
 * - `useLazyGetUserProfilesQuery` for fetching user profiles.
 * - `useState` for managing local state.
 * - `omit` for excluding specific properties from an object.
 *
 * The hook combines the fetched scores and profiles to create a rich user score object, which includes both the score and the user profile information.
 */
export const useLazyRichScores = (): CustomUseLazyQuery<
  (arg: ScoresParams) => Promise<void>,
  { results: UserScore[]; count: number }
> => {
  const [getScores, lazyGetScoresStateResult, lazyGetScoresPromiseInfo] = useLazyGetScoresQuery()
  const [getProfiles, { isLoading: profilesLoading }] = useLazyGetUserProfilesQuery()
  const [userScores, setUserScores] = useState<{ results: UserScore[]; count: number }>({
    results: [],
    count: 0
  })
  const [isLoadingScores, setIsLoadingScores] = useState(false)

  const getRichScores = async (arg: ScoresParams) => {
    lazyGetScoresStateResult.isError = false
    try {
      setIsLoadingScores(true)
      const scoresResults = await getScores(arg).unwrap()
      const profilesResults = await getProfiles({
        userIds: scoresResults?.results?.map((el) => el.userId),
        limit: MAX_LIMIT
      }).unwrap()

      const dataResponse: UserScore[] = []

      scoresResults.results.forEach((score) => {
        const profile = profilesResults.results.find((el) => el.userId === score.userId)
        if (profile) {
          dataResponse.push({
            user: profile,
            userScore: {
              ...score
            }
          })
        }
      })

      setUserScores({
        results: dataResponse,
        count: scoresResults.count
      })
      setIsLoadingScores(false)
    } catch (error) {
      setIsLoadingScores(false)
      lazyGetScoresStateResult.isError = true
      lazyGetScoresStateResult.error = error
      setUserScores({
        results: [],
        count: 0
      })
    }
  }

  const isLoading = lazyGetScoresStateResult.isLoading || profilesLoading || isLoadingScores

  const lazyGetScoresDataRaw = omit(lazyGetScoresStateResult, ['data', 'isLoading', 'currentData'])

  return [
    getRichScores,
    {
      data: userScores,
      currentData: userScores,
      isLoading,
      ...lazyGetScoresDataRaw
    },
    lazyGetScoresPromiseInfo
  ]
}
