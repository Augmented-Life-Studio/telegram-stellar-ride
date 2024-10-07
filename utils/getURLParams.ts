import uniqBy from 'lodash/uniqBy'
import { CollectionQP, SingleAggregatedAssetProperty, TokenData } from 'sdk/interfaces'
import { isArrayPopulated } from './isArrayPopulated'

export const getUniqueTokenValues = (data: TokenData[]): TokenData[] =>
  uniqBy(data, ({ contractAddress, tokenId }) => `${contractAddress}_${tokenId}`)

export const getUniqueCollectionValues = (data: CollectionQP[]): CollectionQP[] =>
  uniqBy(data, ({ createdBy, collectionName }) => `${createdBy}_${collectionName}`)

/**
 * This utility function constructs URL search parameters for the Telegram mini-app.
 * It handles the following functionalities:
 * - Filters out parameters that should be skipped.
 * - Appends sorting parameters.
 * - Appends token and collection parameters with unique values.
 * - Appends property parameters if they are populated.
 * - Appends array parameters.
 * - Appends other parameters directly.
 *
 * @function
 * @param {Object} params - The parameters to be included in the URL.
 * @param {string[]} [paramsToSkip=[]] - The parameters to be skipped.
 * @returns {URLSearchParams} The constructed URL search parameters.
 *
 * @example
 * const params = {
 *   sort: { sortKey: 'name', sortDirection: 'asc' },
 *   tokens: [{ contractAddress: '0x...', tokenId: 1 }],
 *   collections: [{ createdBy: 'user1', collectionName: 'collection1' }],
 *   properties: [{ name: 'color', values: ['red', 'blue'] }],
 *   otherParam: 'value'
 * };
 * const paramsToSkip = ['otherParam'];
 * const urlParams = getURLParams({ params, paramsToSkip });
 *
 * @remarks
 * This function uses helper functions to ensure unique values for tokens and collections:
 * - `getUniqueTokenValues` for tokens.
 * - `getUniqueCollectionValues` for collections.
 * - `isArrayPopulated` to check if an array is populated.
 */
export const getURLParams = ({
  params,
  paramsToSkip = []
}: {
  params: Record<string, any>
  paramsToSkip?: string[]
}): URLSearchParams => {
  const requestParams = new URLSearchParams()

  Object.keys(params)
    .filter((param) => !paramsToSkip.includes(param))
    .forEach((param) => {
      const value = params[param]
      if (param === 'sort') requestParams.append(`sort[${value.sortKey}]`, `${value.sortDirection}`)
      else if (param === 'tokens' || param === 'skipTokens')
        getUniqueTokenValues(value as TokenData[]).forEach((token) => {
          requestParams.append(`${param}[${token.contractAddress}]`, token.tokenId.toString())
        })
      else if (param === 'collections')
        getUniqueCollectionValues(value as CollectionQP[]).forEach((collection) => {
          requestParams.append(`${param}[${collection.createdBy}]`, collection.collectionName)
        })
      else if (param === 'properties') {
        value.forEach((item: SingleAggregatedAssetProperty) => {
          if (item.name && isArrayPopulated(item.values)) {
            item.values.forEach((v) => {
              requestParams.append(`${param}[${item.name}]`, v.toString())
            })
          }
        })
      } else if (Array.isArray(value)) value.forEach((item: any) => requestParams.append(param, item.toString()))
      else requestParams.append(param, value)
    })

  return requestParams
}
