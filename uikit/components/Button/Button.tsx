import * as React from 'react'
import { ButtonSmallCircleWrapper, ButtonSmallWrapper, ButtonWrapper } from '../Svg'
import { Flex } from '../Flex'
import { Text, TextVariant } from '../Text'
import styled from 'styled-components'

const MainWrapper = styled(Flex)<{ disabled?: boolean }>`
  position: relative;
  width: max-content;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  `}
`

const ButtonTextWrapper = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ButtonWrapperStyled = styled(ButtonWrapper)<{ width: string }>`
  width: ${(props) => props.width};
`
const ButtonSmallWrapperStyled = styled(ButtonSmallWrapper)<{ width: string }>`
  width: ${(props) => props.width};
`

interface IButtonProps {
  children?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
  buttonWidth?: string
  buttonHeight?: string
  onClick: () => void
  small?: boolean
  textVariant?: TextVariant
  circle?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  startIcon,
  endIcon,
  disabled,
  buttonWidth = '285',
  buttonHeight = '75',
  onClick,
  small,
  textVariant = TextVariant.BUTTON,
  circle
}) => {
  return (
    <MainWrapper
      onClick={() => {
        onClick()
      }}
      {...{ disabled }}
    >
      {small ? (
        <ButtonSmallWrapperStyled width={'48'} />
      ) : circle ? (
        <ButtonSmallCircleWrapper width={'48'} />
      ) : (
        <ButtonWrapperStyled width={buttonWidth} height={buttonHeight} />
      )}
      <ButtonTextWrapper zIndex={10} position="absolute">
        {React.isValidElement(startIcon) && (
          <div style={{ marginRight: children ? '8px' : '0px' }}>{React.cloneElement(startIcon)}</div>
        )}
        <Text
          style={{ paddingTop: small ? '8px' : circle ? '10px' : '4px', paddingLeft: circle ? '2px' : '0px' }}
          clickable
          textTransform="uppercase"
          variant={textVariant}
        >
          {children}
        </Text>
        {React.isValidElement(endIcon) && (
          <div style={{ marginLeft: children ? '8px' : '0px' }}>{React.cloneElement(endIcon)}</div>
        )}
      </ButtonTextWrapper>
    </MainWrapper>
  )
}

export default Button
