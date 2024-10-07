import { Challenge, ChallengeStatus, Map, PaginationParams, Score, ScoreTotalPersonal } from '@/sdk/interfaces'
import { getURLParams } from '@/utils/getURLParams'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ChallengeByIdParams {
  challengeId: string
}

export interface LeaderboardChallengeParams extends PaginationParams {
  challengeId?: string
  challengeIds?: string[]
  name?: string
  leaderboardId?: string
  leaderboardIds?: string[]
  map?: number
  maps?: number[]
  elympicsGameId?: string
  elympicsGameIds?: string[]
  statuses?: ChallengeStatus[]
}

export interface ScoresParams extends PaginationParams {
  leaderboardId?: string
  leaderboardIds?: string[]
  challengeId?: string
  elympicsUserId?: string
  elympicsUserIds?: string[]
  walletAddress?: string
  walletAddresses?: string[]
  matchId?: string
  startedFrom?: Date
  endedTo?: Date
  map?: number
}

export interface ScoresByUserIdAndLeaderboardIdParams {
  userId: string
  leaderboardId?: string
  map?: number
  scoresBefore?: number
  scoresAfter?: number
  startedFrom?: Date
  endedTo?: Date
}

export interface ScoresCountParams {
  leaderboardId: string
  map?: number
  startedFrom: Date
  endedTo: Date
}

export interface GameMapsParams {
  leaderboardId: string
}

export interface CreateMatchParams {
  leaderboardApiKey: string
  leaderboardId: string
}

export interface AddScoreParams {
  leaderboardApiKey: string
  leaderboardId: string
  matchId: string
  startedAt: string
  endedAt: string
  map: number
  walletAddress: string
  roundData: {
    score: number
  }
}

export interface AddWhitelistScoreParams {
  leaderboardApiKey: string
  leaderboardId: string
  userId: string
}

export const leaderboardApi = createApi({
  reducerPath: 'leaderboard',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_LEADERBOARD_SERVICE_API_URL}` }),
  endpoints: (builder) => ({
    getChallenges: builder.query<{ results: Challenge[]; count: number }, LeaderboardChallengeParams>({
      query: (params) => {
        const requestParams = getURLParams({ params })
        return {
          url: 'challenges/get/all',
          method: 'GET',
          params: requestParams
        }
      }
    }),
    getChallengeById: builder.query<Challenge, ChallengeByIdParams>({
      query: (params) => {
        const { challengeId } = params
        return {
          url: `challenges/get/${challengeId}`,
          method: 'GET'
        }
      }
    }),
    getScores: builder.query<{ results: Score[]; count: number }, ScoresParams>({
      query: (params) => {
        const requestParams = getURLParams({ params })
        return {
          url: 'score-map/get',
          method: 'GET',
          params: requestParams
        }
      }
    }),
    getScoresByUserIdAndLeaderboardId: builder.query<Score[], ScoresByUserIdAndLeaderboardIdParams>({
      query: (params) => {
        const requestParams = getURLParams({ params, paramsToSkip: ['userId'] })
        return {
          url: `score-map/get/personal/${params.userId}`,
          method: 'GET',
          params: requestParams
        }
      }
    }),
    getScoresCountByUserIdAndLeaderboardId: builder.query<number, ScoresByUserIdAndLeaderboardIdParams>({
      query: (params) => {
        const requestParams = getURLParams({ params, paramsToSkip: ['userId'] })
        return {
          url: `score-map/get/count/${params.userId}`,
          method: 'GET',
          params: requestParams
        }
      }
    }),
    getScoresChallengeCount: builder.query<number, ScoresCountParams>({
      query: (params) => {
        const requestParams = getURLParams({ params })
        return {
          url: 'score-map/get/challenge/count',
          method: 'GET',
          params: requestParams
        }
      }
    }),
    getMapsByLeaderboardId: builder.query<Map[], GameMapsParams>({
      query: (params) => {
        return {
          url: `maps/get/all/${params.leaderboardId}`,
          method: 'GET'
        }
      }
    }),
    getScoreTotalByUserIdAndLeaderboardId: builder.query<ScoreTotalPersonal, ScoresByUserIdAndLeaderboardIdParams>({
      query: (params) => {
        return {
          url: `score-total/personal/${params.leaderboardId}/${params.userId}`,
          method: 'GET'
        }
      }
    })
  })
})

export const {
  useGetChallengesQuery,
  useLazyGetChallengesQuery,
  useGetChallengeByIdQuery,
  useLazyGetChallengeByIdQuery,
  useGetScoresQuery,
  useLazyGetScoresQuery,
  useGetScoresByUserIdAndLeaderboardIdQuery,
  useLazyGetScoresByUserIdAndLeaderboardIdQuery,
  useGetMapsByLeaderboardIdQuery,
  useLazyGetMapsByLeaderboardIdQuery,
  useGetScoresCountByUserIdAndLeaderboardIdQuery,
  useGetScoreTotalByUserIdAndLeaderboardIdQuery,
  useGetScoresChallengeCountQuery
} = leaderboardApi
