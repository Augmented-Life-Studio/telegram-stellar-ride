import styled from 'styled-components'
import { Text } from '../Text'

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.red9};
  white-space: break-spaces;
  margin-top: 8px;
  width: 100%;
`
