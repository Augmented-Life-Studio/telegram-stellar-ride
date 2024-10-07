import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(duration)
dayjs.extend(advancedFormat)

export interface Time {
  months: string
  days: string
  hours: string
  minutes: string
  seconds: string
}

/**
 * Calculates the time difference between two dates and returns the duration as an object.
 * @param {Date} fromDate - The starting date of the duration.
 * @param {Date} toDate - The ending date of the duration.
 * @returns {Time} - An object representing the duration with properties for months, days, hours, minutes, and seconds.
 *
 * The function calculates the difference between the two dates using dayjs.js and then breaks down
 * the duration into months, days, hours, minutes, and seconds. Each component of the duration is returned as a string,
 * with hours, minutes, and seconds being zero-padded to ensure a consistent two-digit format.
 */
export const getTimeDifferenceDuration = (fromDate: Date, toDate: Date): Time => {
  const start = dayjs(fromDate)
  const end = dayjs(toDate)

  const months = end.diff(start, 'month')
  const adjustedEnd = start.add(months, 'month')
  const remainingDuration = dayjs.duration(end.diff(adjustedEnd))

  const days = String(Math.floor(remainingDuration.asDays())).padStart(2, '0')
  const hours = String(remainingDuration.hours()).padStart(2, '0')
  const minutes = String(remainingDuration.minutes()).padStart(2, '0')
  const seconds = String(remainingDuration.seconds()).padStart(2, '0')

  return {
    months: String(months).padStart(2, '0'),
    days,
    hours,
    minutes,
    seconds
  }
}
