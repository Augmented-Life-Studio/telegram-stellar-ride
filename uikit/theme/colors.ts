import { Colors } from './types'

export const baseColors = {
  primary1: '#F0F5D8',
  primary2: '#E7F0C5',
  primary3: '#DFEAB2',
  primary4: '#D6E39F',
  primary5: '#CDDC8C',
  primary6: '#C6DA3B',
  primary7: '#B9C835',
  primary8: '#ADC530',
  primary9: '#A0B82A',
  primary10: '#93AC24',
  primary11: '#869F1E',
  primary12: '#799218',

  secondary1: '#F2F5F8',
  secondary2: '#E5EAF0',
  secondary3: '#D8DFE9',
  secondary4: '#CAD4E2',
  secondary5: '#BDC9DB',
  secondary6: '#AFBED4',
  secondary7: '#A2B3CD',
  secondary8: '#95A8C6',
  secondary9: '#8197BB',
  secondary10: '#6781AD',
  secondary11: '#4F6892',
  secondary12: '#405577',

  gray1: '#5E7DB5',
  gray2: '#4A69A1',
  gray3: '#3A527E',
  gray4: '#334870',
  gray5: '#2D3F62',
  gray6: '#273754',
  gray7: '#1D293F',
  gray8: '#141E2F',
  gray9: '#101723',
  gray10: '#06090E',
  gray11: '#030507',
  gray12: '#000000',

  red1: '#FFECEB',
  red2: '#FFD8D6',
  red3: '#FFC5C2',
  red4: '#FFB1AD',
  red5: '#FF9E99',
  red6: '#FF8B85',
  red7: '#FF7770',
  red8: '#FF645C',
  red9: '#FF453A',
  red10: '#FF3D33',
  red11: '#FF2A1F',
  red12: '#FF160A',

  green1: '#E6F6DF',
  green2: '#DAF2CF',
  green3: '#CEEDC0',
  green4: '#C2E8B0',
  green5: '#B6E3A1',
  green6: '#A9DE91',
  green7: '#9DD981',
  green8: '#91D572',
  green9: '#7CCD56',
  green10: '#63BC39',
  green11: '#529D2F',
  green12: '#427E26',
  greenOpacity: 'rgba(124, 205, 86, 0.3)',

  orange1: '#FEECD8',
  orange2: '#FDE3C4',
  orange3: '#FCDAB1',
  orange4: '#FBD19D',
  orange5: '#FBC888',
  orange6: '#FBBE74',
  orange7: '#FBB560',
  orange8: '#FAAC4C',
  orange9: '#FA9E31',
  orange10: '#F98C0B',
  orange11: '#D67605',
  orange12: '#AE6004',
  orangeOpacity: 'rgba(250, 158, 49, 0.3)',

  white1: '#FFFFFF',
  white2: 'rgba(255, 255, 255, 0.9)',
  white3: 'rgba(255, 255, 255, 0.8)',
  white4: 'rgba(255, 255, 255, 0.7)',
  white5: 'rgba(255, 255, 255, 0.6)',
  white6: 'rgba(255, 255, 255, 0.5)',
  white7: 'rgba(255, 255, 255, 0.4)',
  white8: 'rgba(255, 255, 255, 0.3)',
  white9: 'rgba(255, 255, 255, 0.2)',
  white10: 'rgba(255, 255, 255, 0.1)',
  white11: 'rgba(255, 255, 255, 0.05)',

  score: '#86E0FF',
  purple: '#9963FF',
  inputBg: '#D9D9D9',

  contrast: {
    tertiary: '#A9A9A6'
  },

  gradients: {
    primary:
      'linear-gradient(247.57deg, rgba(196, 196, 196, 0.2) 0%, #7763F6 0.01%, #17C6DE 0.02%, #7763F6 99.98%, #5387ED 99.99%, #0AD2DA 100%)',
    reversed:
      'linear-gradient(67.57deg, rgba(196, 196, 196, 0.2) -0.09%, #7763F6 -0.08%, #17C6DE -0.07%, #7763F6 99.89%, #5387ED 99.9%, #0AD2DA 99.91%)'
  }
}

export const brandColors = {
  violet: '#E75685',
  blue: '#695DEF',
  turquoise: '#53C8D3',
  brandGradient: 'linear-gradient(66.11deg, #FC4F91 10.45%, #7763F6 49.21%, #0AD2DA 89.55%)',
  divider: '#272E39',
  vividBlue: '#00D6FF'
}

export const lightColors: Colors = {
  background:
    'radial-gradient(72.82% 42.82% at 0% 0%, #451D5C 0%, #360D42 31%, #270930 48%,  #080F20 92%, #060C1B 100%)',
  text: '#FFFFFF',
  ...baseColors,
  ...brandColors
}

export const darkColors: Colors = {
  background:
    'radial-gradient(72.82% 42.82% at 0% 0%, #451D5C 0%, #360D42 31%, #270930 48%,  #080F20 92%, #060C1B 100%)',
  text: '#FFFFFF',
  ...baseColors,
  ...brandColors
}
