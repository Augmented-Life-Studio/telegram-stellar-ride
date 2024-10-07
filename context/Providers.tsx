import React from 'react'
import { ThemeContextProvider } from './ThemeContext'
import { ModalProvider, StoreProvider } from '../providers'

interface IProviders {
  children: React.ReactNode
}

/**
 * This component provides context providers for the Telegram mini-app.
 * It handles the following functionalities:
 * - Wraps the application with theme, store and modal providers.
 * - Ensures that all child components have access to these contexts.
 *
 * @component
 * @returns {JSX.Element} The rendered Providers component.
 *
 * @example
 * <Providers>
 *   <App />
 * </Providers>
 *
 * @remarks
 * This component uses several context providers:
 * - `ThemeContextProvider` for theme management.
 * - `StoreProvider` for Redux store access.
 * - `ModalProvider` for modal management.
 *
 * The component ensures that all child components have access to these contexts, enabling consistent state and theme management across the application.
 */
const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <StoreProvider>
        <ModalProvider>{children}</ModalProvider>
      </StoreProvider>
    </ThemeContextProvider>
  )
}

export default Providers
