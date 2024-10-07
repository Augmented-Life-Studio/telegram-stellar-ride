import React from 'react'

import { PageLoader } from '@/uikit/components/PageLoader'

interface PageWrapperProps {
  children: React.ReactNode
  loading?: boolean
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, loading }) => {
  const showLoadingPage = loading

  const getContent = () => {
    if (showLoadingPage) return <PageLoader />
    return children
  }

  return <>{getContent()}</>
}

export default PageWrapper
