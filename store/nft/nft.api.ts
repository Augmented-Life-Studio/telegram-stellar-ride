import {
  NftStandard,
  NftProtocol,
  CollectionQP,
  SingleAggregatedAssetProperty,
  NftSchema,
  PaginationParams,
  SortParam
} from 'sdk/interfaces'
import { getURLParams } from 'utils/getURLParams'
import { Network } from '@ethersproject/providers'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export enum SortNftKey {
  TOKEN_TOKEN_ID = 'token._tokenId',
  TOKEN_ID = '_tokenId',
  CREATED_AT = 'createdAt',
  QUANTITY = '_quantity',
  TOKEN_CREACTION_BLOCK = 'token.creationBlock',
  TOKEN_FAVORITES = 'token.favorites',
  TOKEN_NAME = 'token.tokenName'
}

export interface UserCollectedNftListParams extends PaginationParams {
  address: string
  contractAddress?: string
  standard?: NftStandard
  protocol?: NftProtocol
  network?: Network
  _items?: boolean
  id?: number
  sort?: SortParam<SortNftKey>
  collections?: CollectionQP[]
  excludeCollections?: boolean
  showBlacklisted?: boolean
  properties?: SingleAggregatedAssetProperty[]
  createdBy?: string
}

export const nftApi = createApi({
  reducerPath: 'nft',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_NFT_SERVICE_API_URL}` }),
  tagTypes: ['Nft', 'SingleNft'],
  endpoints: (builder) => ({
    getUserNftsByAddress: builder.query<{ count: number; results: NftSchema[] }, UserCollectedNftListParams>({
      query: (params: UserCollectedNftListParams) => {
        const { address } = params
        const requestParams = getURLParams({ params, paramsToSkip: ['address'] })
        return {
          url: `user/${address}/tokens`,
          method: 'GET',
          params: requestParams
        }
      }
    })
  })
})

export const { useGetUserNftsByAddressQuery } = nftApi
