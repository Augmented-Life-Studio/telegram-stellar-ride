import { useEffect, useState, useMemo, Dispatch, SetStateAction } from 'react'
import isNil from 'lodash/isNil'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { ChallengeStatus, Map, RichChallenge, Score, User } from '@/sdk/interfaces'
import { useAppSelector } from '@/store/hooks'
import {
  useGetChallengesQuery,
  useGetMapsByLeaderboardIdQuery,
  useLazyGetScoresQuery
} from '@/store/leaderboard/leaderboard'
import { isArrayPopulated } from '@/utils/isArrayPopulated'
import { areStringsEqual } from '@/utils/areStringsEqual'
import { useExplorerItems } from '@/utils/useExplorerItems'
import { useLazyGetUserProfilesQuery } from '@/store/user/user.api'
import { handleQueryErrorMessage, notFoundErrorMessage } from '@/utils/handleQueryErrorMessage'

export enum ChallengesQueryParam {
  MAPS = 'maps',
  STATUSES = 'statuses'
}

export interface ChallengesFilters {
  maps: number[]
  statuses: ChallengeStatus[]
}

interface ChallengesData {
  challenges: RichChallenge[]
  challengesCount: number
  isLoadingChallenges: boolean
}

export interface ChallengesProps extends ChallengesData {
  loadingFilteredData: boolean
  setLoadingFilteredData: Dispatch<SetStateAction<boolean>>
  maps: Map[]
  users: User[]
  itemsToFetch: number
  onLoadMoreItems: () => NodeJS.Timeout
  errorToastMessage: string
  notFound: boolean
}

const useChallengesFilters = (
  maps?: Map[]
): {
  getValuesFromQueryParams: (key: ChallengesQueryParam, queryParam?: string | string[]) => string[]
  challengesFilters: ChallengesFilters
  removeQueryParams: () => Promise<boolean>
  updateQueryParams: (filters: ChallengesFilters) => Promise<boolean>
} => {
  const { query, push } = useRouter()

  // Filters
  const getValuesFromQueryParams = (key: ChallengesQueryParam, queryParam?: string | string[]): string[] => {
    let values: string[] = []
    if (isNil(queryParam)) return values
    if (typeof queryParam === 'string') values = [queryParam]
    else values = queryParam

    switch (key) {
      case ChallengesQueryParam.MAPS:
        return values.filter((value) => maps?.some(({ mapId }) => areStringsEqual(mapId.toString(), value)))
      case ChallengesQueryParam.STATUSES:
        return values.filter((value) =>
          Object.values(ChallengeStatus).some((filterKey) => areStringsEqual(filterKey, value))
        ) as ChallengeStatus[]
      default:
        return []
    }
  }
  const challengesFilters = useMemo(
    (): ChallengesFilters =>
      ({
        maps: getValuesFromQueryParams(ChallengesQueryParam.MAPS, query?.[ChallengesQueryParam.MAPS]).map((mapId) =>
          Number(mapId)
        ),
        statuses: getValuesFromQueryParams(ChallengesQueryParam.STATUSES, query?.[ChallengesQueryParam.STATUSES])
      } as ChallengesFilters),
    [query, maps?.length]
  )
  // Query params actions
  const removeQueryParams = (): Promise<boolean> =>
    push(
      {
        query: {
          ...(!isNil(query?.gameId) && { gameId: query.gameId })
        }
      },
      undefined,
      {
        shallow: true
      }
    )

  const updateQueryParams = (filters: ChallengesFilters): Promise<boolean> =>
    push(
      {
        query: {
          ...query,
          ...filters
        }
      },
      undefined,
      {
        shallow: true
      }
    )

  return { getValuesFromQueryParams, challengesFilters, removeQueryParams, updateQueryParams }
}

/**
 * This hook provides the challenges data for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves user data and translation context.
 * - Fetches game maps based on the leaderboard ID.
 * - Applies filters to the challenges.
 * - Fetches challenges data and handles loading state.
 * - Retrieves scores and user profiles for the challenges.
 * - Manages errors and displays appropriate messages.
 *
 * @hook
 * @param {string} leaderboardId - The ID of the leaderboard to fetch challenges for.
 * @returns {ChallengesProps} The challenges data and related states.
 *
 * @example
 * const { challenges, isLoadingChallenges } = useChallenges(leaderboardId);
 *
 * @remarks
 * This hook uses several hooks and context providers:
 * - `useAppSelector` for accessing the Redux store.
 * - `useTranslation` for internationalization.
 * - `useGetMapsByLeaderboardIdQuery` for fetching game maps.
 * - `useChallengesFilters` for applying filters to the challenges.
 * - `useExplorerItems` for managing items to fetch and load more functionality.
 * - `useGetChallengesQuery` for fetching challenges data.
 * - `useLazyGetScoresQuery` for fetching scores.
 * - `useLazyGetUserProfilesQuery` for fetching user profiles.
 * - `useState` and `useEffect` for managing state and side effects.
 *
 * The hook conditionally fetches and processes challenges data based on the provided leaderboard ID and applied filters.
 */
export const useChallenges = (leaderboardId: string): ChallengesProps => {
  const { user } = useAppSelector((state) => state.user)
  const { t } = useTranslation()

  // Get game maps
  const { data: maps } = useGetMapsByLeaderboardIdQuery({ leaderboardId })
  // Filters
  const { challengesFilters } = useChallengesFilters(maps)
  const { maps: filterMaps, statuses } = challengesFilters
  // Get challenges
  const [loadingFilteredData, setLoadingFilteredData] = useState<boolean>(false)
  const { itemsToFetch, onLoadMoreItems } = useExplorerItems()
  const [challengesData, setChallengesData] = useState<ChallengesData>({
    challenges: [],
    challengesCount: 0,
    isLoadingChallenges: true
  })
  const { data: challengesList, error } = useGetChallengesQuery(
    {
      leaderboardId,
      ...(isArrayPopulated(filterMaps) && { maps: filterMaps }),
      ...(isArrayPopulated(statuses) && { statuses }),
      limit: itemsToFetch
    },
    { skip: isNil(maps) }
  )
  // Scores
  const [getScores] = useLazyGetScoresQuery()
  // User profiles
  const [users, setUsers] = useState<User[]>([])
  const [getUserProfiles] = useLazyGetUserProfilesQuery()
  // Errors
  const errMsg = handleQueryErrorMessage(t, error)
  const errorToastMessage = notFoundErrorMessage(errMsg) ? '' : errMsg
  const notFound = notFoundErrorMessage(errMsg)

  useEffect(() => {
    if (!isNil(challengesList?.results)) {
      let { challenges, challengesCount } = challengesData
      let userProfiles: User[] = users
      ;(async () => {
        try {
          setLoadingFilteredData(true)
          challenges = await Promise.all(
            challengesList.results.map(async (res) => {
              const { results: top3Scores } = await getScores({
                leaderboardId,
                map: res.map,
                startedFrom: res.startDate,
                endedTo: res.endDate,
                limit: 3
              }).unwrap()
              const { results: userScore } = await getScores({
                leaderboardId,
                map: res.map,
                startedFrom: res.startDate,
                endedTo: res.endDate,
                ...(user?.userId && { userId: user?.userId }),
                limit: 1
              }).unwrap()
              const map: Map = maps.find(({ mapId }) => mapId === res.map)
              const personalScore: Score = userScore.find(({ userId }) => areStringsEqual(userId, user?.userId))
              return {
                ...res,
                mapData: map,
                top3Scores,
                ...(!isNil(personalScore) && { personalScore })
              }
            })
          )
          const uniqueUserIds = new Set<string>()
          challenges.forEach((challenge) => {
            challenge.top3Scores.forEach((score) => uniqueUserIds.add(score.userId))
          })

          if (user?.userId) uniqueUserIds.add(user?.userId)
          const uniqueUserIdsArray = [...uniqueUserIds]
          userProfiles = (await getUserProfiles({ userIds: uniqueUserIdsArray }).unwrap()).results
          challengesCount = challengesList.count
        } catch (error) {
          console.log(error, 'useChallenges')
        } finally {
          setChallengesData({ challenges, challengesCount, isLoadingChallenges: false })
          setLoadingFilteredData(false)
          setUsers(userProfiles)
        }
      })()
    }
  }, [challengesList?.results, user])

  return {
    ...challengesData,
    loadingFilteredData,
    setLoadingFilteredData,
    maps,
    users,
    itemsToFetch,
    onLoadMoreItems,
    errorToastMessage,
    notFound
  }
}
