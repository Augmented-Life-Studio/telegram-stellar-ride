import {
  NftStandard,
  NftProtocol,
  CollectionQP,
  SingleAggregatedAssetProperty,
  NftSchema,
  PaginationParams,
  SortParam,
  TokenData
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

export interface NftListParams extends PaginationParams {
  address?: string
  network?: Network
  networks?: Network[]
  protocols?: string[]
  tokens?: TokenData[]
  standard?: NftStandard
  id?: number
  _tokenId?: number
  creationBlock?: number
  categoryId?: number
  tagId?: number
  categoryIds?: number[]
  tagIds?: number[]
  tokenIds?: number[]
  asset_category?: string
  asset_subcategories?: string
  asset_tags?: string
  sort?: SortParam<SortNftKey>
  skipTokens?: TokenData[]
  collections?: CollectionQP[]
  showBlacklisted?: boolean
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
    }),
    getNftList: builder.query<{ count: number; results: NftSchema[] }, NftListParams>({
      query: (params: NftListParams) => {
        const requestParams = getURLParams({ params })
        return {
          url: 'tokens',
          method: 'GET',
          params: requestParams
        }
      },
      providesTags: (result) => [
        {
          type: 'Nft',
          result
        }
      ]
    })
  })
})

export const { useGetUserNftsByAddressQuery, useGetNftListQuery, useLazyGetNftListQuery } = nftApi
