/**
 * This utility function generates a deep link for the Metapro wallet.
 * It handles the following functionalities:
 * - Checks if the provided WalletConnect URL contains an expiry timestamp.
 * - Modifies the URL to remove the expiry timestamp and retain the relay protocol.
 * - Constructs a new deep link URL for the Metapro wallet.
 *
 * @function
 * @param {string} wcUrl - The WalletConnect URL to be processed.
 * @returns {string} The generated deep link URL for the Metapro wallet.
 *
 * @example
 * const deepLink = getMetaproDeepLink('wc:example?expiryTimestamp=123&relay-protocol=xyz');
 * console.log(deepLink); // Outputs: https://metapro.one/app/wc?uri=wc:example?relay-protocol=xyz
 *
 * @remarks
 * This function is useful for ensuring that the WalletConnect URL used in the Metapro wallet does not contain an expiry timestamp, which might cause issues with the connection.
 */
export const getMetaproDeepLink = (wcUrl: string) => {
  let subdomain = ''
  if (Telegram?.WebApp?.platform?.includes('ios')) {
    subdomain = 'wallet.'
  }
  if (wcUrl?.includes('?expiryTimestamp=')) {
    const wc1_1 = wcUrl.split('?expiryTimestamp=')
    const wc1_2 = wc1_1[1].split('&relay-protocol=')

    const wcNew = wc1_1[0] + '?' + 'relay-protocol=' + wc1_2[1]

    return `https://${subdomain}metapro.one/app/wc?uri=${wcNew}`
  }
  return `https://${subdomain}metapro.one/app/wc?uri=${wcUrl}`
}
