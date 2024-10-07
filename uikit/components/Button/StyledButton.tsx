import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { ButtonProps, ButtonThemeVariant, variants, sizes } from './types'
import { getTextStylesByVariant, TextVariant } from '../Text'

type ThemedProps = {
  theme: DefaultTheme
} & ButtonProps

const getDisabledStyles = ({ isLoading, theme, variant = variants.PRIMARY, disabled }: ThemedProps) => {
  const variantTheme = theme.button[variant]

  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `
  }

  if (disabled) {
    return `
    &:disabled,
    &::before,
    &::after,
    &.button--disabled {
      background: ${variantTheme.backgroundDisabled};
      color: ${variantTheme.colorDisabled};
      border: ${variantTheme.borderDisabled};
      cursor: not-allowed;
    }
  `
  }
  return ''
}

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== 'button') {
    return `
      pointer-events: none;
    `
  }

  return ''
}

const getButtonVariantProp =
  (prop: keyof ButtonThemeVariant) =>
  ({ theme, variant = variants.PRIMARY }: ThemedProps) => {
    return theme.button[variant]?.[prop]
  }

const getFontStyles = ({ size }: ThemedProps) => {
  switch (size) {
    case sizes.SM:
      return { ...getTextStylesByVariant(TextVariant.BODY_SMALL_BOLD) }
    default:
      return { ...getTextStylesByVariant(TextVariant.BUTTON) }
  }
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  ${getFontStyles}
  align-items: center;
  background: ${getButtonVariantProp('background')};
  border: 0;
  border-radius: 8px;
  color: ${({ white }) => (white ? 'white' : getButtonVariantProp('color'))};
  cursor: pointer;
  display: inline-flex;
  /* max-content instead of auto for Safari fix */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  height: ${({ size }) => (size === 'sm' ? '40px' : '56px')};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === 'sm' ? '0 16px' : '0 32px')};
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  border: ${getButtonVariantProp('border')};
  z-index: 1;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: opacity 0.6s linear;
    background: ${getButtonVariantProp('background')};
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: opacity 0.6s linear;
    border: ${getButtonVariantProp('borderHover')};
    background: ${getButtonVariantProp('backgroundHover')};
  }

  &:hover::before {
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`

StyledButton.defaultProps = {
  fullWidth: false,
  type: 'button'
}

export default StyledButton
