import { keyframes } from 'styled-components'

export const loadingAnimation = keyframes`
  0% {
    filter: blur(0);
  }
  50% {
    filter: blur(2px);
  }
   100% {
    filter: blur(0px);
  }
`
