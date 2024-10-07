import * as React from 'react'
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={356} height={98} fill="none" {...props}>
    <path
      fill="url(#a-usernameBox)"
      fillRule="evenodd"
      d="M11.256 5.353c70.834-7.137 257.8-7.137 328.633 0 4.393.446 11.256 22.899 11.256 40.147 0 17.248-6.863 39.701-11.256 40.147-70.833 7.137-257.8 7.137-328.633 0C6.864 85.201 0 62.748 0 45.5 0 28.252 6.864 5.799 11.256 5.353Z"
      clipRule="evenodd"
      opacity={0.15}
      style={{
        mixBlendMode: 'multiply'
      }}
    />
    <path
      fill="url(#b-usernameBox)"
      fillRule="evenodd"
      d="M354.002 61.266c2.475-.593 3.3 15.846-1.374 25.176-1.375 2.666-3.3 4.74-6.05 5.48-23.924 6.665-204.591 7.997-239.24 3.258-10.724-1.48-8.25-1.925 1.375-2.073 20.35-.296 80.022 0 89.096 0 17.6-.148 139.419-1.333 146.019-6.665 6.325-5.183 8.8-24.732 10.174-25.028v-.148Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    <defs>
      <radialGradient
        id="b-usernameBox"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(270.313 0 0 145.581 342.728 135.611)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8531F1" />
        <stop offset={0.89} stopColor="#07121D" />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
)
export default SvgComponent
