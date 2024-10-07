import { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export type QueryMessageError = string | undefined
export type Translation = (...props: any) => any

export const enum ErrorCode {
  FETCH_ERROR = 'FETCH_ERROR',
  PARSING_ERROR = 'PARSING_ERROR'
}

export const getMessegeTranslation = (translation: Translation, msg?: string): string | undefined => {
  if (!msg) return undefined

  switch (msg) {
    case ErrorCode.FETCH_ERROR:
      return translation('queryErrors.fetchError')
    case ErrorCode.PARSING_ERROR:
      return translation('queryErrors.parsingError')
    default:
      return msg
  }
}

/**
 * This utility function handles error messages for query operations in the Telegram mini-app.
 * It processes different types of errors and retrieves the appropriate error message based on the error type.
 *
 * @function
 * @param {Translation} translation - The translation object used for internationalization.
 * @param {FetchBaseQueryError | SerializedError} [error] - The error object that may contain details about the query error.
 * @returns {QueryMessageError} The translated error message.
 *
 * @example
 * const errorMessage = handleQueryErrorMessage(translation, error);
 *
 * @remarks
 * This function handles two types of errors:
 * - `FetchBaseQueryError`: Errors that occur during a fetch operation.
 * - `SerializedError`: General errors that are serialized.
 *
 * The function checks the properties of the error object to determine the appropriate error message to return.
 * It uses the `getMessegeTranslation` function to translate error statuses and accesses nested properties of the error object.
 */
export const handleQueryErrorMessage = (translation: Translation, error?: FetchBaseQueryError | SerializedError) => {
  let errMsg: QueryMessageError

  if (error) {
    if ('status' in error) {
      // access all properties of `FetchBaseQueryError`
      if ('error' in error) errMsg = getMessegeTranslation(translation, error.status)
      // @ts-ignore
      if (error?.data?.messages) errMsg = error.data.messages.join('\r\n')
      // @ts-ignore
      if (error?.data?.message) errMsg = error.data.message
    } else {
      // access all properties of `SerializedError`
      errMsg = error.message
    }
  }

  return errMsg
}

export const notFoundErrorMessage = (errMsg?: string) => errMsg && errMsg.toLowerCase().includes('not found')
