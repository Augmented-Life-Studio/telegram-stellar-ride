import { ButtonTheme, variants } from './types'
import { darkColors } from '../../theme/colors'

const { PRIMARY, SECONDARY, OUTLINED } = variants

export const dark: ButtonTheme = {
  [PRIMARY]: {
    background: darkColors.gradients.primary,
    backgroundHover: darkColors.gradients.reversed,
    backgroundDisabled: darkColors.gray7,
    color: darkColors.text,
    colorDisabled: darkColors.white9
  },
  [SECONDARY]: {
    background: darkColors.gray7,
    backgroundHover: darkColors.gray5,
    backgroundDisabled: darkColors.gray7,
    color: darkColors.text,
    colorDisabled: darkColors.white9
  },
  [OUTLINED]: {
    background: 'transparent',
    backgroundHover: 'transparent',
    backgroundDisabled: 'transparent',
    color: darkColors.text,
    colorDisabled: darkColors.white9,
    border: `1px solid ${darkColors.gray3}`,
    borderHover: `1px solid ${darkColors.secondary9}`,
    borderDisabled: `1px solid rgba(58, 82, 126, 0.4)`
  }
}

export const light: ButtonTheme = {
  [PRIMARY]: {
    ...dark.primary
  },
  [SECONDARY]: {
    ...dark.secondary
  },
  [OUTLINED]: {
    ...dark.outlined
  }
}
