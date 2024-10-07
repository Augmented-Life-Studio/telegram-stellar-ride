import styled from 'styled-components'
import { space } from 'styled-system'
import { SVGAttributes } from 'react'
import { DefaultTheme } from 'styled-components'
import { SpaceProps } from 'styled-system'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme
  fill?: string
}

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ color }) => color};
  flex-shrink: 0;
  ${space};

  // Safari fix
  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {
    filter: none !important;
  }
`

Svg.defaultProps = {
  color: 'text',
  width: '20px',
  xmlns: 'http://www.w3.org/2000/svg'
}

export default Svg
