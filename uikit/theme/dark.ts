import { DefaultTheme } from 'styled-components'
import base from './base'
import { darkColors } from './colors'
import { dark as darkButton } from '../components/Button/theme'
import { defaultTheme as themeText } from '../components/Text/theme'

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  button: darkButton,
  text: themeText
}

export default darkTheme
