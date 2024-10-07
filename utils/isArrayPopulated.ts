import isNil from 'lodash/isNil'
import size from 'lodash/size'

/**
 * This utility function checks if an array is populated.
 * It handles the following functionalities:
 * - Verifies if the provided array is not null or undefined.
 * - Checks if the array has one or more elements.
 *
 * @function
 * @param {any[]} [array] - The array to check.
 * @returns {boolean} `true` if the array is populated, otherwise `false`.
 *
 * @example
 * const result = isArrayPopulated([1, 2, 3]);
 * console.log(result); // true
 *
 * @remarks
 * This function uses the following utility functions:
 * - `isNil` to check if the array is null or undefined.
 * - `size` to get the number of elements in the array.
 */
export const isArrayPopulated = (array?: any[]) => {
  if (isNil(array)) return false
  return size(array) > 0
}
