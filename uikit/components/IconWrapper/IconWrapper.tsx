import React from 'react'
import { useTheme } from 'styled-components'
import { SpaceProps } from 'styled-system'
import { Flex } from '../Flex'
import { FlexProps } from '../Flex/types'

interface IconWrapperProps extends FlexProps, SpaceProps {
  icon: React.ReactNode
  color?: string
  width?: number
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, color, width, ...props }) => {
  const theme = useTheme()

  return (
    <Flex {...props}>
      {React.isValidElement(icon) &&
        React.cloneElement(icon, {
          ...(icon.props.style || {}),
          fill: color || theme.colors.white1,
          width
        })}
    </Flex>
  )
}

export default IconWrapper
