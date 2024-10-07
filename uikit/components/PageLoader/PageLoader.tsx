import React from 'react'
import styled, { useTheme } from 'styled-components'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import { Flex } from '../Flex'

const LoadingWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const PageLoader: React.FC = () => {
  const theme = useTheme()

  return (
    <LoadingWrapper>
      <UseAnimations animation={loading2} strokeColor={theme.colors.secondary9} size={64} />
    </LoadingWrapper>
  )
}

export default PageLoader
