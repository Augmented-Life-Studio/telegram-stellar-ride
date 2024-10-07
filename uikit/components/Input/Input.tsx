import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import isNil from 'lodash/isNil'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import { Text, TextVariant } from '../Text'
import { InputWrapper } from './InputAssets'
import { InputProps } from './types'
import { Flex } from '../Flex'

const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
`

const LengthText = styled(Text)`
  position: absolute;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.secondary7};
  bottom: 2px;
  right: 15px;
`

export const StyledTextField = styled(TextField)<{ success?: boolean; padding?: string }>`
  &.MuiTextField-root {
    width: 100%;
    .MuiInputBase-input {
      font-family: Magistral-ExtraBold;
      color: ${({ theme }) => theme.colors.gray12};
      font-size: 24px;
      ::placeholder {
        opacity: 1;
        color: ${({ theme, disabled }) => (disabled ? theme.colors.secondary7 : theme.colors.white4)};
      }
    }
    .MuiFilledInput-root {
      border: 1px solid ${({ theme, success }) => (success ? theme.colors.green9 : theme.colors.inputBg)};
      background-color: ${({ theme }) => theme.colors.inputBg};
      border-radius: 8px;
      height: ${(props) => (props.multiline ? 'unset' : '64px')};
      .MuiFilledInput-input {
        padding: ${(props) => (props.label ? '8px 20px' : '8px 20px')};
      }
      &.Mui-error {
        border: 1px solid ${({ theme }) => theme.colors.red11};
      }
      &.Mui-focused {
        border: 1px solid ${({ theme }) => theme.colors.primary9};

        &.Mui-error {
          border: 1px solid ${({ theme }) => theme.colors.red11};
        }
      }
      &.Mui-disabled {
        background-color: ${({ theme }) => theme.colors.gray7};
        border: 1px solid ${({ theme }) => theme.colors.gray3};
        .MuiInputBase-input {
          color: ${({ theme }) => theme.colors.secondary7};
          -webkit-text-fill-color: ${({ theme }) => theme.colors.secondary7};
        }
      }
      &.MuiFilledInput-underline:before {
        border-bottom: unset;
      }
      &.MuiFilledInput-underline:after {
        border-bottom: unset;
      }
    }
    .MuiInputLabel-filled {
      transform: translate(10px, 15px);
      color: ${({ theme, disabled }) => (disabled ? theme.colors.secondary7 : theme.colors.secondary7)};
      transition: all 0.15s;
      &.MuiInputLabel-shrink {
        font-family: Magistral-ExtraBold;
        font-size: 10px;
        line-height: 138.5%;
        transform: translate(5px, 2px);
        color: ${({ theme }) => theme.colors.secondary6};
      }
    }
    .MuiFilledInput-underline {
      padding: ${({ padding }) => padding};
    }
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

const Input: React.FC<InputProps> = ({
  name,
  label,
  labelSideText,
  placeholderLabel,
  placeholder,
  topDescription,
  bottomDescription,
  required,
  value,
  onChange,
  error,
  errorMsg,
  textarea,
  maxLength,
  disabled,
  success,
  successMsg,
  startIcon,
  endIcon,
  padding,
  inboxTitle,
  InputProps,
  endSideIcon,
  restrictedValue,
  testId,
  ...props
}) => {
  const [textLength, setTextLength] = useState(value && typeof value === 'string' ? value.length : 0)
  const { colors } = useTheme()

  useEffect(() => {
    setTextLength(value && typeof value === 'string' ? value.length : 0)
  }, [value])

  const getEndAdornment = () => {
    switch (true) {
      case React.isValidElement(endIcon):
        return endIcon
      case !isNil(inboxTitle):
        return (
          <Text variant={TextVariant.BODY_DEFAULT_BOLD} color={colors.secondary9}>
            {inboxTitle}
          </Text>
        )
      default:
        return <></>
    }
  }

  const getInputValue = () => {
    switch (true) {
      case isString(value) && !isNil(value):
        return value !== '' && value !== '0' ? value : undefined
      case isNumber(value):
        return !isNil(value) && value > 0 ? value : undefined
      default:
        return undefined
    }
  }

  return (
    <InputWrapper
      label={label}
      labelSideText={labelSideText}
      topDescription={topDescription}
      required={required}
      error={error}
      errorMsg={errorMsg}
      bottomDescription={bottomDescription}
      success={success}
      successMsg={successMsg}
    >
      <Flex width="100%" alignItems="center">
        <TextAreaWrapper>
          <StyledTextField
            data-testid={testId}
            name={name}
            success={success}
            value={restrictedValue || getInputValue()}
            label={placeholderLabel}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            onFocus={(e) =>
              e.target.addEventListener(
                'wheel',
                (e) => {
                  e.preventDefault()
                },
                { passive: false }
              )
            }
            variant="filled"
            multiline={textarea}
            padding={padding}
            error={error}
            InputProps={{
              startAdornment: startIcon && (
                <InputAdornment position="start" sx={{ paddingBottom: 2, marginRight: 0 }}>
                  {React.isValidElement(startIcon) && React.cloneElement(startIcon)}
                </InputAdornment>
              ),
              endAdornment: (endIcon || !isNil(inboxTitle)) && (
                <InputAdornment position="start" sx={{ marginRight: 0, paddingBottom: 2 }}>
                  {getEndAdornment()}
                </InputAdornment>
              ),
              ...InputProps
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            inputProps={{ maxLength: maxLength || 255 }}
            {...props}
          />
          {textarea && (
            <LengthText variant={TextVariant.BODY_DEFAULT_BOLD}>
              {textLength} / {maxLength || 255}
            </LengthText>
          )}
        </TextAreaWrapper>
        {React.isValidElement(endSideIcon) && endSideIcon}
      </Flex>
    </InputWrapper>
  )
}

export default Input
