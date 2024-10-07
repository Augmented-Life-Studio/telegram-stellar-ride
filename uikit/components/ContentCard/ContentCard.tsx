import React from 'react'
import { useTheme } from 'styled-components'
import { ContentCardProps } from './types'
import { Flex } from '../Flex'

const ContentCard: React.FC<ContentCardProps> = ({ children, disabled, ...props }: ContentCardProps) => {
  const theme = useTheme()

  return (
    <Flex
      px="24px"
      py="32px"
      borderRadius="16px"
      background={theme.colors.gray8}
      {...props}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </Flex>
  )
}

export default ContentCard
