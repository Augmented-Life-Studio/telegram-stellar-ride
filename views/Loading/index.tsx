import React, { FC } from 'react'
import { useInitialFetch } from '@/hooks/useInitialFetch'
import { PageLoader } from '@/uikit/components/PageLoader'

/* Initial loading view */
const Loading: FC = () => {
  useInitialFetch()
  return <PageLoader />
}

export default Loading
