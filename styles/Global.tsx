import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  font-family:"MagistralCond-Medium", sans-serif;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
  }
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray5}; 
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray7}; 
    border-radius: 4px;
    box-shadow: none;
  }
  // Text selection
  ::-moz-selection {
   background: ${({ theme }) => theme.colors.blue}; 
  }
  ::-webkit-selection {
    background: ${({ theme }) => theme.colors.blue}; 
  }
  ::selection {
    background: ${({ theme }) => theme.colors.blue}; 
  }
`

export default GlobalStyle
