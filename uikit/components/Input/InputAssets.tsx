import React, { ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { Flex } from '../Flex'
import { Text, TextVariant } from '../Text'
import { InputProps } from './types'
import { ErrorMessage } from '../ErrorMessage'

export const LabelSideText = styled(Text)`
  color: ${({ theme, color }) => color || theme.colors.white1};
  padding-left: 5px;
`

const textStyle = css`
  margin-top: 8px;
  width: 100%;
`

const StyledInputDescription = styled(Text)`
  ${textStyle}
  color: ${({ theme }) => theme.colors.secondary9};
`

const StyledSuccessMessage = styled(Text)`
  ${textStyle}
  color: ${({ theme }) => theme.colors.green9};
`

const StyledLabelSideText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary9};
  padding-left: 5px;
`

export const InputTopDescription: React.FC<{ children?: ReactNode }> = ({ children, ...props }) => {
  return <StyledInputDescription {...props}>{children}</StyledInputDescription>
}

export const InputBottomDescription: React.FC<{ children?: ReactNode }> = ({ children, ...props }) => {
  return <StyledInputDescription {...props}>{children}</StyledInputDescription>
}

export const SuccessMessage: React.FC<{ children?: ReactNode }> = ({ children, ...props }) => {
  return <StyledSuccessMessage {...props}>{children}</StyledSuccessMessage>
}

export const RequiredStar: React.FC = () => {
  const theme = useTheme()
  return <span style={{ color: theme.colors.orange10, marginLeft: 8 }}>*</span>
}

export const InputLabel: React.FC<InputProps> = ({ label, labelBold, topDescription, required, labelSideText }) => {
  return (
    <Flex width="100%">
      {label && (
        <Flex alignItems="center" justifyContent="space-between" pb="5px" width="100%">
          <Flex alignItems="center">
            <Text variant={labelBold ? TextVariant.BODY_DEFAULT_BOLD : TextVariant.BODY_DEFAULT_MEDIUM}>{label}</Text>
            {required && <RequiredStar />}
          </Flex>
          {labelSideText && React.isValidElement(labelSideText) ? (
            labelSideText
          ) : (
            <StyledLabelSideText variant={TextVariant.BODY_SMALL}>{labelSideText}</StyledLabelSideText>
          )}
        </Flex>
      )}
      {topDescription && <InputTopDescription>{topDescription}</InputTopDescription>}
    </Flex>
  )
}

export const InputWrapper: React.FC<InputProps> = ({
  label,
  labelBold,
  labelSideText,
  topDescription,
  bottomDescription,
  error,
  errorMsg,
  success,
  successMsg,
  required,
  children
}) => {
  return (
    <Flex flexDirection="column" position="relative" width="100%">
      <InputLabel
        label={label}
        labelBold={labelBold}
        labelSideText={labelSideText}
        topDescription={topDescription}
        required={required}
      />
      {children}
      {bottomDescription && (
        <>
          {React.isValidElement(bottomDescription) ? (
            bottomDescription
          ) : (
            <InputBottomDescription>{bottomDescription}</InputBottomDescription>
          )}
        </>
      )}
      {error && errorMsg && <ErrorMessage data-testid={`error-${errorMsg.toLowerCase()}`}>{errorMsg}</ErrorMessage>}
      {success && successMsg && <SuccessMessage>{successMsg}</SuccessMessage>}
    </Flex>
  )
}
