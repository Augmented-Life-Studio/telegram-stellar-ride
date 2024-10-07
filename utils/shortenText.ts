import { getAddress } from '@ethersproject/address'

/**
 * This utility function checks if a given value is a valid address.
 * It handles the following functionalities:
 * - Attempts to retrieve the address using the `getAddress` function.
 * - Returns the address if valid, otherwise returns `false`.
 *
 * @function
 * @param {any} value - The value to be checked as an address.
 * @returns {string | false} The valid address as a string, or `false` if the value is not a valid address.
 *
 * @example
 * const address = isAddress('0x123...');
 * if (address) {
 *   console.log('Valid address:', address);
 * } else {
 *   console.log('Invalid address');
 * }
 *
 * @remarks
 * This function is useful for validating addresses in various contexts, such as user input or data processing.
 */
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

/**
 * This utility function shortens a given text by keeping a specified number of characters
 * from the beginning and end of the text, and replacing the middle part with ellipsis (...).
 * It handles the following functionalities:
 * - Checks if the text length is less than or equal to the sum of firstChars and lastChars.
 * - Returns the original text if the condition is met.
 * - Otherwise, returns the shortened text with ellipsis in the middle.
 *
 * @function
 * @param {string} text - The text to be shortened.
 * @param {number} [firstChars=4] - The number of characters to keep from the beginning of the text.
 * @param {number} [lastChars=4] - The number of characters to keep from the end of the text.
 * @returns {string} The shortened text.
 *
 * @example
 * shortenText("Hello, World!", 2, 2) // "He...d!"
 *
 * @remarks
 * This function is useful for displaying shortened versions of long texts, such as in UI elements
 * where space is limited.
 */
export function shortenText(text: string, firstChars = 4, lastChars = 4): string {
  const textLength = text.length
  if (textLength <= firstChars + lastChars) return text
  return `${text.substring(0, firstChars)}...${text.substring(textLength - lastChars)}`
}

/**
 * This utility function shortens an Ethereum address for display purposes.
 * It handles the following functionalities:
 * - Validates if the provided string is a valid Ethereum address.
 * - Shortens the address by keeping a specified number of characters from the start and end.
 * - Uses the `shortenText` function to format the address.
 *
 * @function
 * @param {string} address - The Ethereum address to be shortened.
 * @param {number} [chars=4] - The number of characters to keep at the start of the address.
 * @param {number} [lastChars=4] - The number of characters to keep at the end of the address.
 * @returns {string} The shortened address if valid, otherwise returns the original address.
 *
 * @example
 * const shortAddress = shortenAddress('0x1234567890abcdef1234567890abcdef12345678');
 * console.log(shortAddress); // Output: '0x1234...5678'
 *
 * @remarks
 * This function relies on the `isAddress` utility to validate the Ethereum address.
 * It is useful for displaying addresses in a more readable format in UI components.
 */
export function shortenAddress(address: string, chars = 4, lastChars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) return address
  return shortenText(parsed, chars + 2, lastChars)
}
