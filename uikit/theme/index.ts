import { ButtonTheme } from '../components/Button/types'
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices, Backgrounds, Grids } from './types'
import { TextTheme } from '../components/Text/types'

export interface MetaprotocolTheme {
  siteWidth: number
  isDark: boolean
  colors: Colors
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  zIndices: ZIndices
  backgrounds: Backgrounds
  grids: Grids
  button: ButtonTheme
  text: TextTheme
}

export { default as dark } from './dark'
export { default as light } from './light'

export { lightColors } from './colors'
export { darkColors } from './colors'
export { baseColors } from './colors'
