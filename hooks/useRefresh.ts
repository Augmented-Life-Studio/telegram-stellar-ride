import { RefreshContext } from '@/context/RefreshContext'
import { useContext } from 'react'

/**
 * This hook provides fast and slow refresh functions from the RefreshContext.
 * It handles the following functionalities:
 * - Retrieves fast and slow refresh functions from the context.
 *
 * @hook
 * @returns {Object} An object containing fast and slow refresh functions.
 * @property {Function} fastRefresh - The fast refresh function.
 * @property {Function} slowRefresh - The slow refresh function.
 *
 * @example
 * const { fastRefresh, slowRefresh } = useRefresh();
 *
 * @remarks
 * This hook uses the `useContext` hook to access the `RefreshContext` and extract the fast and slow refresh functions.
 */
const useRefresh = () => {
  const { fast, slow } = useContext(RefreshContext)
  return { fastRefresh: fast, slowRefresh: slow }
}

export default useRefresh
