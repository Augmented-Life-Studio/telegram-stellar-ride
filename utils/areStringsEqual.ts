import isNil from 'lodash/isNil'
import isEqual from 'lodash/isEqual'
import toLower from 'lodash/toLower'

/**
 * This utility function compares two strings for equality in a case-insensitive manner.
 * It handles the following functionalities:
 * - Checks if either of the strings is `null` or `undefined`.
 * - Converts both strings to lowercase before comparison.
 *
 * @function
 * @param {string} [string] - The first string to compare.
 * @param {string} [stringToCompare] - The second string to compare.
 * @returns {boolean} `true` if the strings are equal (case-insensitive), otherwise `false`.
 *
 * @example
 * const result = areStringsEqual('Hello', 'hello');
 * console.log(result); // true
 *
 * @remarks
 * This function uses the following utility functions:
 * - `isNil` to check for `null` or `undefined` values.
 * - `toLower` to convert strings to lowercase.
 * - `isEqual` to compare the lowercase strings.
 */
export const areStringsEqual = (string?: string, stringToCompare?: string): boolean => {
  if (isNil(string) || isNil(stringToCompare)) return false
  return isEqual(toLower(string), toLower(stringToCompare))
}
