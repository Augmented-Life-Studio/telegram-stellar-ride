import React, { useRef, JSX, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../store/store'

interface StoreProviderProps {
  children: ReactNode
}

/**
 * This component provides the Redux store for the Telegram mini-app.
 * It handles the following functionalities:
 * - Initializes the Redux store instance.
 * - Provides the store to its children components.
 *
 * @component
 * @returns {JSX.Element} The rendered StoreProvider component.
 *
 * @example
 * <StoreProvider>
 *   <App />
 * </StoreProvider>
 *
 * @remarks
 * This component uses the following hooks and context providers:
 * - `useRef` for creating a mutable store reference.
 * - `Provider` from `react-redux` for providing the store to the component tree.
 *
 * The store instance is created only once and reused across renders.
 */
const StoreProvider: React.FC<StoreProviderProps> = ({ children }): JSX.Element => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current} stabilityCheck="never">
      {children}
    </Provider>
  )
}

export default StoreProvider
