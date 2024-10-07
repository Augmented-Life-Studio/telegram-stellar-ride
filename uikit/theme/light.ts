import { DefaultTheme } from 'styled-components'
import base from './base'
import { lightColors } from './colors'
import { light as lightButton } from '../components/Button/theme'
import { defaultTheme as themeText } from '../components/Text/theme'

export const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  button: lightButton,
  text: themeText
}

export default lightTheme
