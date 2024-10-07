import styled from 'styled-components'
import Button from './Button'
import { ButtonProps } from './types'

const IconButton = styled(Button)<ButtonProps>`
  padding: 0px 8px;
  width: ${({ size, fullWidth }) => {
    switch (true) {
      case fullWidth:
        return '100%'
      case size === 'sm':
        return '40px'
      default:
        return '56px'
    }
  }};
`

export default IconButton
