import styled from 'styled-components'
import { compose, typography, space, color, system, layout, position, background } from 'styled-system'
import { TextProps, TextVariant } from './types'
import { defaultTheme } from './theme'

export const getTextStylesByVariant = (variant?: TextVariant) => (variant ? defaultTheme[variant] : {})
export const getTextTrimmedStyles = (isTrimmed?: boolean) => (isTrimmed ? defaultTheme[TextVariant.TRIMMED] : {})

export const TextBase = styled.div<TextProps>`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'MagistralCond-Medium';
  font-size: 16px;
  line-height: 26px;
  -webkit-line-clamp: ${({ linesToDisplay }) => linesToDisplay};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  }

  ${compose(typography, space, color, layout, position, background)}
  ${system({
    textTransform: {
      property: 'textTransform',
      scale: 'textTransforms',
      defaultScale: ['none', 'uppercase', 'lowercase', 'capitalize', 'full-width', 'full-size-kana']
    }
  })}
`

export const Text = styled(TextBase)<TextProps>(({ variant = TextVariant.BODY_DEFAULT, isTrimmed }) => ({
  ...getTextStylesByVariant(variant),
  ...getTextTrimmedStyles(isTrimmed)
}))
