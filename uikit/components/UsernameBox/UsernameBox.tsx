import * as React from 'react'
import { Flex } from '../Flex'
import { Text, TextVariant } from '../Text'
import styled from 'styled-components'
import { SettingsIconSmall, UsernameBoxWrapper } from '../Svg'
import { Button } from '../Button'

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

const UsernameBoxTextWrapper = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  justify-content: center;
  align-items: center;
`
const FlexSettingsIcon = styled(Flex)`
  position: absolute;
  top: -10px;
  right: 30px;
  z-index: 50;
`

interface IUsernameBoxProps {
  children?: React.ReactNode
  openModal: () => void
}

const UsernameBox: React.FC<IUsernameBoxProps> = ({ children, openModal }) => {
  return (
    <MainWrapper>
      <UsernameBoxWrapper />
      <FlexSettingsIcon alignItems="center" justifyContent="center">
        <Button onClick={openModal} circle>
          <SettingsIconSmall />
        </Button>
      </FlexSettingsIcon>
      <UsernameBoxTextWrapper zIndex={10} position="absolute">
        <Text textAlign="center" variant={TextVariant.BODY_DEFAULT}>
          {children}
        </Text>
      </UsernameBoxTextWrapper>
    </MainWrapper>
  )
}

export default UsernameBox
