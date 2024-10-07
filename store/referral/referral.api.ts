import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthorizationParams, ReferralSettings } from '../../sdk/interfaces'
import getApiHeaders from 'utils/getApiHeaders'

interface UserReferralCodeParams extends AuthorizationParams {
  projectId: string
}

interface ReferralCodeResponse {
  referralCode: string
}

export const referralApi = createApi({
  reducerPath: 'referralApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_REFERRAL_SERVICE_API_URL}` }),
  endpoints: (builder) => ({
    getProjectReferralSettings: builder.query<ReferralSettings, { referralSettingsId: string }>({
      query: (params) => {
        const { referralSettingsId } = params
        return {
          url: `referral-settings/${referralSettingsId}`,
          method: 'GET'
        }
      }
    }),
    getUserReferralCode: builder.query<ReferralCodeResponse, UserReferralCodeParams>({
      query: (params) => {
        const { projectId, userId, accessToken } = params

        return {
          url: `/users/projects/${projectId}/referral-code`,
          headers: getApiHeaders({ userId, accessToken })
        }
      }
    }),
    createReferralCode: builder.mutation<ReferralCodeResponse, UserReferralCodeParams>({
      query: (params) => {
        const { projectId, userId, accessToken } = params

        return {
          url: `/users/projects/referral-code`,
          method: 'POST',
          headers: getApiHeaders({ userId, accessToken }),
          body: {
            projectId
          }
        }
      }
    })
  })
})

export const {
  useGetProjectReferralSettingsQuery,
  useLazyGetProjectReferralSettingsQuery,
  useCreateReferralCodeMutation,
  useGetUserReferralCodeQuery,
  useLazyGetUserReferralCodeQuery
} = referralApi
