import { ReactNode } from 'react'
import { BackgroundProps } from 'styled-system'
import { FlexProps } from '../Flex/types'

export interface ContentCardProps extends FlexProps, BackgroundProps {
  children: ReactNode
  disabled?: boolean
}
