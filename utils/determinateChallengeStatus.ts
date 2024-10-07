import { ChallengeStatus } from '@/sdk/interfaces'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

/**
 * This utility function determines the status of a challenge based on the current date and the provided start and end dates.
 * It handles the following functionalities:
 * - Checks if the current date is before the start date to determine if the challenge is incoming.
 * - Checks if the current date is between the start and end dates to determine if the challenge is active.
 * - Defaults to the challenge being ended if the current date is after the end date.
 *
 * @function
 * @param {Date} startDate - The start date of the challenge.
 * @param {Date} endDate - The end date of the challenge.
 * @returns {ChallengeStatus} The status of the challenge (INCOMING, ACTIVE, or ENDED).
 *
 * @example
 * const status = determinateChallengeStatus(new Date('2023-01-01'), new Date('2023-12-31'));
 *
 * @remarks
 * This function uses the `dayjs` library to handle date comparisons.
 * The `ChallengeStatus` enum is assumed to be defined elsewhere in the codebase.
 */
export const determinateChallengeStatus = (startDate: Date, endDate: Date) => {
  const now = dayjs()

  if (now.isBefore(startDate)) return ChallengeStatus.INCOMING
  if (now.isBetween(startDate, endDate)) return ChallengeStatus.ACTIVE

  return ChallengeStatus.ENDED
}
