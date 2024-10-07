import * as React from 'react'

const SvgComponent = (props) => (
  <svg width={290} height={74} viewBox="0 0 290 74" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      style={{ mixBlendMode: 'multiply' }}
      opacity="0.15"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.16956 4.03209C66.8707 -1.34403 219.175 -1.34403 276.876 4.03209C280.454 4.36809 286.045 21.2805 286.045 34.2727C286.045 47.265 280.454 64.1774 276.876 64.5134C219.175 69.8895 66.8707 69.8895 9.16956 64.5134C5.59119 64.1774 0 47.265 0 34.2727C0 21.2805 5.59119 4.36809 9.16956 4.03209Z"
      fill="url(#paint0_radial_2_2)"
    />
    <path
      style={{ mixBlendMode: 'screen' }}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M288.373 46.1482C290.389 45.702 291.061 58.0846 287.253 65.1125C286.133 67.1205 284.565 68.6823 282.325 69.24C262.836 74.26 115.663 75.264 87.4386 71.6943C78.7023 70.5787 80.7183 70.244 88.5586 70.1325C105.135 69.9094 153.745 70.1325 161.137 70.1325C175.473 70.0209 274.708 69.1285 280.084 65.1125C285.237 61.2081 287.253 46.4828 288.373 46.2597V46.1482Z"
      fill="url(#paint1_radial_2_2)"
    />
    <defs>
      <radialGradient
        id="paint1_radial_2_2"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(279.188 102.149) scale(220.199 109.658)"
      >
        <stop stopColor="#8531F1" />
        <stop offset="0.89" stopColor="#07121D" />
        <stop offset="1" />
      </radialGradient>
    </defs>
  </svg>
)

export default SvgComponent
