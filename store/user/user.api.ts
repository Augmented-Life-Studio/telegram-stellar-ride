import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthorizationParams, PersonalDetails, PublicUserRole, SortParam, User } from '../../sdk/interfaces'
import getApiHeaders from '../../utils/getApiHeaders'
import { getURLParams } from '@/utils/getURLParams'

enum UserApiTag {
  USER = 'User'
}

export enum SortUserKey {
  CREATED_AT = 'createdAt',
  VISITED_AT = 'visitedAt',
  ENGAGEMENT_POINTS = 'engagementPoints'
}

export interface GetUserProfilesParams {
  skip?: number
  limit?: number
  wallets?: string[]
  roles?: PublicUserRole[]
  elympicsUserIds?: string[]
  sort?: SortParam<SortUserKey>
  userIds?: string[]
}

interface UserResponse {
  account: User
  token: { accessToken: string; tokenType: string }
}

export interface UpdateUserParams extends AuthorizationParams {
  personalDetails: PersonalDetails
}

export interface GetUsernameAvailabilityParams extends AuthorizationParams {
  userName: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_USERS_SERVICE_API_URL}` }),
  tagTypes: [UserApiTag.USER],
  endpoints: (builder) => ({
    me: builder.query<User, AuthorizationParams>({
      query: (params) => {
        const { account, userId, accessToken } = params
        return {
          url: 'me',
          method: 'GET',
          headers: getApiHeaders({ account, userId, accessToken })
        }
      },
      providesTags: [{ type: UserApiTag.USER, id: 'User' }]
    }),
    fetchSignatureHash: builder.query<{ hash: string }, { account: string }>({
      query: ({ account }) => ({
        url: 'auth/signature/hash',
        method: 'GET',
        headers: getApiHeaders({ account })
      })
    }),
    addWallet: builder.mutation<
      User,
      { account: string; signature: string; hash: string; accessToken: string; userId: string }
    >({
      query: ({ account, signature, hash, accessToken, userId }) => ({
        url: 'v2/auth/web3/new-address',
        method: 'POST',
        headers: getApiHeaders({ hash, accessToken, userId, account }),
        body: {
          wallet: account,
          signature,
          merge: true
        }
      })
    }),
    telegramLogin: builder.mutation<
      UserResponse,
      {
        id: number
        first_name: string
        last_name: string
        username: string
        telegramSimpleString: string
        referralCode?: string
      }
    >({
      query: ({ id, first_name, last_name, username, telegramSimpleString, referralCode }) => ({
        url: 'v2/auth/telegram/login/simple',
        method: 'POST',
        body: {
          telegramSimpleData: {
            id,
            first_name,
            last_name,
            username
          },
          telegramSimpleString,
          projectId: process.env.NEXT_PUBLIC_METAPRO_PROJECT_ID,
          platformId: process.env.NEXT_PUBLIC_METAPRO_PLATFORM_ID,
          telegramBotName: process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME,
          ...(referralCode && { referralCode })
        }
      })
    }),
    updateUser: builder.mutation<User, UpdateUserParams>({
      query: (params) => {
        const { account, userId, accessToken, personalDetails } = params
        return {
          url: 'update',
          method: 'PATCH',
          body: { personalDetails },
          headers: getApiHeaders({ account, userId, accessToken })
        }
      },
      invalidatesTags: [{ type: UserApiTag.USER, id: 'User' }]
    }),
    checkUserNameAvailability: builder.query<
      {
        isAvailable: boolean
      },
      GetUsernameAvailabilityParams
    >({
      query: (params) => {
        const { account, userId, accessToken, userName } = params
        return {
          url: `availability/${encodeURIComponent(userName)}`,
          method: 'GET',
          headers: getApiHeaders({ account, userId, accessToken })
        }
      }
    }),
    getProfile: builder.query<User, { account: string }>({
      query: ({ account }) => ({
        url: `profile/${account}`,
        method: 'GET'
      })
    }),
    getUserProfiles: builder.query<{ count: number; results: User[] }, GetUserProfilesParams>({
      query: (params) => {
        const requestParams = getURLParams({ params })

        return {
          url: 'profiles',
          method: 'GET',
          params: requestParams
        }
      }
    })
  })
})

export const {
  useLazyFetchSignatureHashQuery,
  useTelegramLoginMutation,
  useFetchSignatureHashQuery,
  useMeQuery,
  useUpdateUserMutation,
  useLazyCheckUserNameAvailabilityQuery,
  useGetProfileQuery,
  useAddWalletMutation,
  useLazyGetUserProfilesQuery,
  useGetUserProfilesQuery
} = userApi
