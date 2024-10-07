import dayjs from 'dayjs'

/**
 * Formats a date range into a human-readable string.
 * @param {Date} startDate - The start date of the range.
 * @param {Date} endDate - The end date of the range.
 * @returns {string} - A string representing the date range in a human-readable format.
 * The format of the returned string depends on the relationship between the start and end dates:
 * If the start and end dates are in the same month and year, it returns "D - D MMM YYYY".
 * If the start and end dates are in the same year, but different months, it returns "D MMM - D MMM YYYY".
 * If the start and end dates are in different years, it returns "D MMM YYYY - D MMM YYYY".
 */

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const start = dayjs(startDate)
  const end = dayjs(endDate)

  if (start.isSame(end, 'month') && start.isSame(end, 'year'))
    return `${start.format('D')} - ${end.format('D MMM YYYY')}`
  if (start.isSame(end, 'year')) return `${start.format('D MMM')} - ${end.format('D MMM YYYY')}`
  return `${start.format('D MMM YYYY')} - ${end.format('D MMM YYYY')}`
}
