// Providers
import { authApi } from '../api/axios'
import getApiHeaders from './getApiHeaders'
import { SignMessage } from '../hooks/useSignMessage'

/**
 * This function retrieves a signature for a given account using a provided signMessage function.
 * It handles the following functionalities:
 * - Fetches a hash from the auth API using the account information.
 * - Constructs a verification message for the user to sign.
 * - Opens a link in the Telegram WebApp to prompt the user to sign the message.
 * - Returns the wallet address, signature, and hash.
 *
 * @function
 * @param {string} account - The account address to retrieve the signature for.
 * @param {SignMessage} signMessage - The function to sign the message.
 * @returns {Promise<{walletAddress: string, signature: string, hash: string}>} The wallet address, signature, and hash.
 *
 * @throws {Error} If no account or provider data is provided.
 *
 * @example
 * const signatureData = await getSignature('0x123...', signMessageFunction);
 *
 * @remarks
 * This function uses the following:
 * - `authApi.get` to fetch the hash from the API.
 * - `getApiHeaders` to construct the necessary headers for the API request.
 * - `Telegram.WebApp.openLink` to open a link in the Telegram WebApp.
 * - `signMessage` to sign the constructed verification message.
 */
const getSignature = async (account: string, signMessage: SignMessage) => {
  if (account) {
    const signatureResponse = await authApi.get(`web3/signature/hash`, {
      headers: getApiHeaders({ account })
    })
    const { hash } = signatureResponse.data
    const walletAddress = account.toLowerCase()
    const verifyMessage = `Please sign to let us verify\nthat you are the owner of this address\n${walletAddress}\n\nRequest ID ${hash}`

    Telegram.WebApp.openLink('https://wallet.metapro.one/app')
    const signature = await signMessage(walletAddress, verifyMessage)

    return {
      walletAddress,
      signature,
      hash
    }
  }
  throw new Error('No account or provider data provided')
}

export default getSignature
