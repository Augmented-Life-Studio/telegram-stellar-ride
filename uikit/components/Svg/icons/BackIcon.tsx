import * as React from 'react'
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={22} fill="none" {...props}>
    <path
      fill="url(#a-back)"
      fillRule="evenodd"
      d="M0 10.358c0 1.302 15.883 10.772 17.186 10.07 1.152-.65 1.503-19.69.35-20.392C16.285-.665.05 9.055.05 10.358H0Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#b-back)"
      fillRule="evenodd"
      d="M15.532 21.33c-2.605-1.302-5.06-2.605-7.415-4.008-2.455-1.453-4.71-2.956-7.065-4.51-1.654-1.051 1.403 2.957 6.313 5.763 4.96 2.856 9.72 3.557 8.167 2.756Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    <defs>
      <radialGradient
        id="a-back"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(7.967 -11.638) scale(42.5386)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F0044" />
        <stop offset={1} stopColor="#5B38B5" />
      </radialGradient>
      <radialGradient
        id="b-back"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(3.958 9.957) scale(37.0271)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9D8DFF" />
        <stop offset={0.89} stopColor="#12101D" />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
)
export default SvgComponent
