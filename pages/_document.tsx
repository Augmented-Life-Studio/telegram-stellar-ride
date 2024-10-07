import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

/**
 * This component customizes the default HTML document structure for the Telegram mini-app.
 * It handles the following functionalities:
 * - Sets the language attribute of the HTML document to English.
 * - Includes the Telegram Web App JavaScript SDK with lazy loading strategy.
 * - Renders the main content and Next.js scripts.
 *
 * @component
 * @returns {JSX.Element} The customized HTML document structure.
 *
 * @example
 * <Document />
 *
 * @remarks
 * This component is used to augment the default document structure provided by Next.js.
 * It includes the Telegram Web App SDK to enable Telegram-specific functionalities.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="lazyOnload" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
