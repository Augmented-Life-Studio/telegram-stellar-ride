import { Web3ProviderContext } from '@/context/Web3ProviderContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import Providers from '@/context/Providers'
import GlobalStyle from '@/styles/Global'
import ResetCSS from '@/uikit/ResetCSS'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import AppLayout from '@/layouts/AppLayout'
import { getMetaTags } from '@/utils/getMetaTags'
import { Text } from '@/uikit'

/**
 * This component renders the main application view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Initializes the Telegram WebApp.
 * - Provides Web3 context and other global providers.
 * - Renders a loading component until the Telegram WebApp is ready.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.Component - The page component to render.
 * @param {Object} props.pageProps - The initial props for the page component.
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * <App Component={SomePageComponent} pageProps={somePageProps} />
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useState` and `useEffect` for managing the Telegram WebApp initialization state.
 * - `Web3ProviderContext` for providing Web3 context.
 * - Custom `Providers` component for additional global providers.
 * - `AppLayout` for the main layout structure.
 * - `ResetCSS` and `GlobalStyle` for global styles.
 *
 * The component conditionally renders a loading component until the Telegram WebApp is fully initialized.
 */
function App({ Component, pageProps }: AppProps) {
  const [isTelegramLoaded, setIsTelegramLoaded] = useState(false)
  const [showBrowserWarning, setShowBrowserWarning] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (typeof window !== 'undefined') {
        if (Telegram?.WebApp) {
          const platform = Telegram.WebApp.platform

          if (platform === 'ios' || platform === 'android' || platform === 'android_x') {
            Telegram.WebApp.expand()
            Telegram.WebApp.disableVerticalSwipes()
            Telegram.WebApp.ready()
            setIsTelegramLoaded(true)
            clearInterval(intervalId)
          } else {
            setShowBrowserWarning(true)
            clearInterval(intervalId)
          }
        } else {
          setShowBrowserWarning(true)
          clearInterval(intervalId)
        }
      }
    }, 500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      {getMetaTags()}
      <Web3ProviderContext walletConnectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}>
        <Providers>
          <AppLayout>
            <ResetCSS />
            <GlobalStyle />
            {showBrowserWarning ? (
              <BrowserWarning />
            ) : !isTelegramLoaded ? (
              <LoadingComponent />
            ) : (
              <Component {...pageProps} />
            )}
          </AppLayout>
        </Providers>
      </Web3ProviderContext>
    </>
  )
}

export default appWithTranslation(App)

const LoadingComponent = () => <div></div>

const BrowserWarning = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <Text>The app must be launched in the Telegram app on a mobile device.</Text>
  </div>
)
