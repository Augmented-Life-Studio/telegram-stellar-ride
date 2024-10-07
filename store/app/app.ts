import {
  App,
  AppBase,
  AppCategory,
  AppEngine,
  AppPlatform,
  AppStatus,
  AuthorizationParams,
  Network,
  PaginationParams,
  Properties,
  SocialMedia,
  SortParam
} from '@/sdk/interfaces'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export enum SortAppKey {
  CREATED_AT = 'createdAt',
  FAVORITES = 'favorites'
}

enum AppApiTag {
  APP = 'APP',
  APPS = 'APPS'
}

export interface AppListParams extends PaginationParams {
  teamId?: string
  categories?: AppCategory[]
  appStore?: string
  website?: string
  createdBy?: string
  _tokenId?: number
  _items?: boolean
  teamIds?: string[]
  platforms?: AppPlatform[]
  statuses?: AppStatus[]
  engines?: AppEngine[]
  networks?: Network[]
  address?: string
  sort?: SortParam<SortAppKey>
  protocols?: string[]
  socialMedia?: SocialMedia[]
}

export interface UserListParams extends AppListParams {
  userId: string
}

export interface ItemProperty {
  key: string
  value: string | string[]
  value_type: string | string[] | boolean | number | number[]
}
export interface AssignedAppItem {
  appId: string
  teamId: string
  developmentStatus: string
  description: string
  image: string
  tokenName: string
  _tokenId: number
  address: string
  _bucketHash: string
  createdBy: string
  properties?: Properties
  creationBlock?: number
  symbol?: string
}

export interface UpdateAppParams extends AuthorizationParams {
  app: AppBase
  appId: string
}

export const appApi = createApi({
  reducerPath: 'apps',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_TEAMS_SERVICE_API_URL }),
  tagTypes: [AppApiTag.APP, AppApiTag.APPS],
  endpoints: (builder) => ({
    getAppById: builder.query<App, string>({
      query: (appId) => `apps/${appId}`,
      providesTags: (result) => (result ? [{ type: AppApiTag.APP, id: result.appId }] : [])
    })
  })
})

export const { useLazyGetAppByIdQuery, useGetAppByIdQuery } = appApi
