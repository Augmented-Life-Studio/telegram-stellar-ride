import * as React from 'react'
import { Flex } from '../Flex'
import { Text, TextVariant } from '../Text'
import styled from 'styled-components'
import { MessageBoxWrapper } from '../Svg'

const MainWrapper = styled(Flex)<{ disabled?: boolean }>`
  position: relative;
  width: max-content;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  `}
`

const MessageBoxTextWrapper = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  justify-content: center;
  align-items: center;
`

const MessageBoxWrapperStyled = styled(MessageBoxWrapper)<{ width: string }>`
  width: ${(props) => props.width};
`

interface IMessageBoxProps {
  children?: React.ReactNode
  messageBoxWidth?: string
}

const MessageBox: React.FC<IMessageBoxProps> = ({ children, messageBoxWidth = '285' }) => {
  return (
    <MainWrapper>
      <MessageBoxWrapperStyled width={messageBoxWidth} />
      <MessageBoxTextWrapper zIndex={10} position="absolute">
        <Text textAlign="center" variant={TextVariant.BODY_DEFAULT}>
          {children}
        </Text>
      </MessageBoxTextWrapper>
    </MainWrapper>
  )
}

export default MessageBox
