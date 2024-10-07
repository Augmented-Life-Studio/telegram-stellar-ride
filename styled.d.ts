import 'styled-components'
import { MetaprotocolTheme } from './uikit/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends MetaprotocolTheme {}
}
