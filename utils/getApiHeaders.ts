interface GetApiHeadersParams {
  contentType?: string
  accessToken?: string
  account?: string
  userId?: string
  hash?: string
  blobType?: string
  blobContent?: string
}

/**
 * Generates API headers for making HTTP requests.
 * It handles the following functionalities:
 * - Sets the `Accept` header.
 * - Sets the `Content-Type` header based on the provided `contentType` or defaults to `application/json`.
 * - Optionally includes the `Authorization` header if `accessToken` is provided.
 * - Optionally includes custom headers for account, user ID, hash, blob type, and blob content.
 *
 * @function
 * @param {Object} params - The parameters for generating API headers.
 * @param {string} params.contentType - The content type of the request.
 * @param {string} params.accessToken - The access token for authorization.
 * @param {string} params.account - The account wallet address.
 * @param {string} params.userId - The user ID.
 * @param {string} params.hash - The login hash.
 * @param {string} params.blobType - The blob type for storage.
 * @param {string} params.blobContent - The blob content for storage.
 * @returns {Object} The generated headers object.
 *
 * @example
 * const headers = getApiHeaders({
 *   contentType: 'application/json',
 *   accessToken: 'Bearer token',
 *   account: '0x1234567890abcdef',
 *   userId: 'user123',
 *   hash: 'hash123',
 *   blobType: 'BlockBlob',
 *   blobContent: 'some content'
 * });
 *
 * @remarks
 * This function is useful for setting up headers required for making authenticated API requests.
 * It conditionally includes headers based on the provided parameters.
 */
const getApiHeaders = ({
  contentType,
  accessToken,
  account,
  userId,
  hash,
  blobType,
  blobContent
}: GetApiHeadersParams): {
  Accept: string
  'Content-Type': string
  Authorization?: string
  'x-account-wallet'?: string
  'x-account-login-hash'?: string
  'x-account-UserId'?: string
  'x-ms-blob-type'?: string
  'x-ms-blob-content'?: string
} => {
  return {
    Accept: '*/*',
    'Content-Type': contentType || 'application/json',
    ...(accessToken && { Authorization: accessToken }),
    ...(account && { 'x-account-wallet': account.toLowerCase() }),
    ...(hash && { 'x-account-login-hash': hash }),
    ...(userId && { 'x-account-UserId': userId }),
    ...(blobType && { 'x-ms-blob-type': blobType }),
    ...(blobContent && { 'x-ms-blob-content': blobContent })
  }
}

export default getApiHeaders
