import React, { useState, useEffect } from 'react'

const FAST_INTERVAL = 10000
const SLOW_INTERVAL = 60000

const RefreshContext = React.createContext({ slow: 0, fast: 0 })

/**
 * This component provides the Refresh context for the Telegram mini-app.
 * It handles the following functionalities:
 * - Manages two state variables, `slow` and `fast`, which are incremented at different intervals.
 * - Sets up intervals to update the `slow` and `fast` state variables.
 * - Provides the `slow` and `fast` values to its children via context.
 *
 * @component
 * @returns {JSX.Element} The rendered RefreshContextProvider component.
 *
 * @example
 * <RefreshContextProvider>
 *   <YourComponent />
 * </RefreshContextProvider>
 *
 * @remarks
 * This component uses the following hooks:
 * - `useState` for managing the `slow` and `fast` state variables.
 * - `useEffect` for setting up and cleaning up intervals.
 *
 * The component sets up two intervals:
 * - One for updating the `fast` state variable at a faster interval.
 * - One for updating the `slow` state variable at a slower interval.
 */
const RefreshContextProvider = ({ children }) => {
  const [slow, setSlow] = useState(0)
  const [fast, setFast] = useState(0)

  useEffect(() => {
    const interval = setInterval(async () => {
      setFast((prev) => prev + 1)
    }, FAST_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      setSlow((prev) => prev + 1)
    }, SLOW_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return <RefreshContext.Provider value={{ slow, fast }}>{children}</RefreshContext.Provider>
}

export { RefreshContext, RefreshContextProvider }
