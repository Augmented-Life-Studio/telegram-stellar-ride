import { TextVariant, TextTheme } from './types'

export const defaultTheme: TextTheme = {
  [TextVariant.TEXT_XS_REGULAR]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '12px',
    lineHeight: '16px'
  },
  [TextVariant.TEXT_XS_MEDIUM]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '12px',
    lineHeight: '16px'
  },
  [TextVariant.TEXT_XS_BOLD]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '12px',
    lineHeight: '16px'
  },
  [TextVariant.BODY_SMALL]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '14px'
  },
  [TextVariant.BODY_SMALL_BOLD]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '14px'
  },
  [TextVariant.BODY_SMALL_MEDIUM]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '14px'
  },
  [TextVariant.BODY_DEFAULT]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '16px',
    lineHeight: '26px'
  },
  [TextVariant.BODY_DEFAULT_BOLD]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '16px',
    lineHeight: '26px'
  },
  [TextVariant.BODY_DEFAULT_MEDIUM]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '16px',
    lineHeight: '26px'
  },
  [TextVariant.BODY_BIG]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '18px',
    lineHeight: '31px'
  },
  [TextVariant.BODY_BIG_BOLD]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '18px',
    lineHeight: '31px'
  },
  [TextVariant.BODY_BIG_MEDIUM]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '18px',
    lineHeight: '31px'
  },
  [TextVariant.H1]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '72px',
    lineHeight: '83px'
  },
  [TextVariant.H2]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '64px',
    lineHeight: '74px'
  },
  [TextVariant.H3]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '48px',
    lineHeight: '55px'
  },
  [TextVariant.H4]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '32px',
    lineHeight: '37px'
  },
  [TextVariant.H5]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '24px',
    lineHeight: '31px'
  },
  [TextVariant.CAPTION]: {
    fontFamily: 'MagistralCond-Medium',
    fontSize: '18px',
    lineHeight: '31px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase'
  },
  // Additional styles applied when isTrimmed prop is passed
  // Don't recommended to use as a variant itself as it doesn't have additional styling
  [TextVariant.TRIMMED]: {
    overflow: 'hidden',
    display: '-webkit-inline-box',
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-word'
  },
  [TextVariant.HIGHLIGHTED]: {
    fontFamily: 'Magistral-ExtraBold',
    backgroundImage:
      '-webkit-linear-gradient(66.11deg, #fc4f91 10.45%, #c857b9 25.48%,#7763f6 49.21%,#5387ed 61.07%,#1fbddf 80.06%,#0ad2da 89.55%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  [TextVariant.BUTTON]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '30px',
    lineHeight: '30px'
  },
  [TextVariant.SMALL_BUTTON]: {
    fontFamily: 'Magistral-ExtraBold',
    fontSize: '17px'
  }
}
