import React from 'react'
import Head from 'next/head'

export const getMetaTags = () => {
  const TITLE = 'Stellar Ride Challenges'
  const DESCRIPTION = 'Telegram Mini App'
  const DEFAULT_IMAGE = ''

  const defaultMetaData = (
    <Head>
      {/* Base meta tags */}
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:url" content={DEFAULT_IMAGE} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:secure_url" content={DEFAULT_IMAGE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      {/* Base meta tags */}
      {/* Twitter meta tags  */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Twitter meta tags  */}
    </Head>
  )

  return defaultMetaData
}
