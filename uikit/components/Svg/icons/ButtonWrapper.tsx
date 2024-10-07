import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const ButtonWrapper: React.FC<SvgProps> = ({ width, height, viewBox, ...props }) => {
  const uniqueId = `gradient-${Math.random().toString(36).substring(2, 9)}`
  const paint0Id = `paint0-${uniqueId}`
  const paint1Id = `paint1-${uniqueId}`
  const paint2Id = `paint2-${uniqueId}`
  const paint3Id = `paint3-${uniqueId}`
  const paint4Id = `paint4-${uniqueId}`
  const paint5Id = `paint5-${uniqueId}`

  return (
    <Svg
      width={width || '285'}
      height={height || '75'}
      viewBox={viewBox || '0 0 285 75'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M278.166 69.9871C276.248 71.3112 273.73 72.1624 270.852 72.4461C228.168 75.8509 64.5059 76.0401 14.3881 72.257C11.5105 72.0678 8.87274 71.1221 6.95435 69.798C-0.479387 64.5016 -2.75747 13.3352 4.19668 7.75509C5.99516 6.33642 8.51304 5.29607 11.5105 4.91776C67.5034 -1.51351 230.206 -1.51351 273.25 4.25572C276.008 4.63403 278.406 5.5798 280.204 6.99847C287.518 12.7677 285.959 64.5016 278.166 69.9871Z"
        fill={`url(#${paint0Id})`}
      />
      <path
        style={{ mixBlendMode: 'screen' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M274.328 67.0555C279.843 63.7453 281.402 42.9383 281.522 38.4931C281.642 33.9534 281.522 13.2409 276.247 9.74154C275.167 9.07949 273.968 8.51203 272.53 8.32287C244.114 4.25604 199.511 2.64822 143.159 2.93195C86.9259 3.21569 41.724 5.39097 12.2289 8.98492C10.7901 9.17407 9.47119 9.64696 8.3921 10.4036C3.35634 13.8084 3.47624 34.2371 3.59614 38.6823C3.83594 43.1274 5.51452 63.5562 10.7901 66.7718C14.8666 69.2308 34.4102 71.5953 140.761 71.5953C247.111 71.5953 270.371 69.3254 274.328 66.961V67.0555Z"
        fill={`url(#${paint1Id})`}
      />
      <path
        style={{ mixBlendMode: 'screen' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M143.159 2.93195C86.9268 3.21569 41.7249 5.39097 12.2297 8.98492C10.7909 9.17407 9.11236 10.309 8.39297 11.2548C7.31388 12.768 6.35469 16.6457 5.99499 21.3746C5.27559 28.9408 57.7914 36.6961 79.2533 37.6419C97.3581 38.4931 251.189 27.8059 275.168 18.4427C278.526 17.1186 277.806 13.3355 276.128 10.5927C275.528 9.64696 273.849 8.51203 272.411 8.32287C243.995 4.25604 199.392 2.64822 143.04 2.93195H143.159Z"
        fill={`url(#${paint2Id})`}
      />
      <path
        style={{ mixBlendMode: 'screen' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M279.245 11.7273C282.362 17.8749 283.561 28.1838 283.322 38.5874C282.962 48.9909 281.163 59.2053 277.566 65.2582C276.008 68.001 274.929 69.6088 270.492 69.9871C233.683 72.5407 193.997 73.7702 142.8 73.6756C91.6031 73.6756 51.7966 72.3516 14.7478 69.798C10.1916 69.5142 9.23243 67.8118 7.67375 65.0691C4.19668 59.0161 2.27829 48.9909 1.79869 38.7765C1.3191 28.5621 2.39819 18.5369 5.39567 12.3894C6.71456 9.55206 7.55385 7.84966 12.11 7.37677C43.044 3.97198 87.4066 1.98585 143.04 1.70212C198.673 1.41839 242.556 2.93163 272.651 6.71473C277.087 7.2822 277.806 8.98459 279.245 11.7273ZM270.852 72.4461C273.73 72.257 276.248 71.3112 278.166 69.9871C286.079 64.5962 287.518 12.7677 280.204 6.99847C278.406 5.5798 276.008 4.63403 273.25 4.25572C230.206 -1.51351 67.5034 -1.51351 11.5105 4.91776C8.63294 5.29607 6.11506 6.24184 4.19668 7.75509C-2.75747 13.3352 -0.479387 64.5016 6.95435 69.7034C8.87274 71.0275 11.5105 71.9732 14.3881 72.1624C64.5059 75.9455 228.168 75.7563 270.852 72.3516V72.4461Z"
        fill={`url(#${paint3Id})`}
      />
      <path
        style={{ mixBlendMode: 'screen' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M142.56 1.89128C198.433 1.89128 242.796 3.68825 271.931 7.37677C277.087 8.03882 279.604 10.0249 281.283 13.4297C284.041 19.199 284.76 28.1838 285.12 34.7097C285.12 21.7526 283.681 9.64664 280.444 6.99847C278.645 5.5798 276.247 4.63403 273.49 4.25572C230.206 -1.51351 67.5031 -1.51351 11.5103 4.91776C8.6327 5.29607 6.11482 6.24184 4.19644 7.75509C1.07906 10.2141 -0.239825 21.8471 -2.70754e-05 34.3314C0.35967 27.9001 1.07906 19.1044 3.83674 13.4297C5.51533 10.0249 8.03321 8.03882 13.1889 7.37677C42.2044 3.68825 86.687 1.89128 142.56 1.89128Z"
        fill={`url(#${paint4Id})`}
      />
      <path
        style={{ mixBlendMode: 'screen' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M142.56 73.5813C86.6873 73.5813 42.9241 73.203 13.7887 70.3656C8.633 69.8927 5.51563 66.9608 3.83704 63.5561C3.59725 63.0832 3.35745 62.6103 3.23755 62.0428C4.31664 65.9205 5.51563 68.7578 6.95442 69.7982C8.8728 71.1223 11.5106 72.068 14.3882 72.2572C64.506 76.0403 228.168 75.8511 270.852 72.4463C273.73 72.2572 276.248 71.3114 278.166 69.9873C280.084 68.6632 281.643 64.5018 282.842 58.9218C282.362 60.6241 281.883 62.1374 281.163 63.4615C279.485 66.8663 276.368 69.7982 271.212 70.2711C242.196 73.1084 198.313 73.4867 142.44 73.4867L142.56 73.5813Z"
        fill={`url(#${paint5Id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.7074 12.0108C64.9855 13.1457 79.733 10.403 83.2101 8.32226C85.728 6.80902 73.1386 6.43071 70.1411 7.28191C65.9447 8.41684 61.6283 11.4433 62.7074 12.0108ZM59.4701 8.03853C61.2686 10.5921 46.7608 18.0638 31.5336 19.0095C16.3065 19.9553 10.5513 14.5644 10.7911 13.524C11.6304 9.17346 58.5109 6.80902 59.4701 8.03853Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id={paint0Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(75.1769 -74.622) scale(284.52 224.433)"
        >
          <stop stopColor="#9963FF" />
          <stop offset="1" stopColor="#5900E0" />
        </radialGradient>
        <radialGradient
          id={paint1Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(80.5713 -274.842) scale(600.215 473.455)"
        >
          <stop stopColor="#7C39FF" />
          <stop offset="0.89" stopColor="#0E061D" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id={paint2Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(116.302 -223.487) scale(455.976 359.678)"
        >
          <stop stopColor="#9D8DFF" />
          <stop offset="0.89" stopColor="#12101D" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id={paint3Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(142.56 37.4524) scale(173.494 136.854)"
        >
          <stop offset="0.64" />
          <stop offset="0.68" stopColor="#040304" />
          <stop offset="0.72" stopColor="#0F0E11" />
          <stop offset="0.77" stopColor="#232028" />
          <stop offset="0.82" stopColor="#3F3A47" />
          <stop offset="0.87" stopColor="#635B6F" />
          <stop offset="0.92" stopColor="#8F83A0" />
          <stop offset="0.97" stopColor="#C1B2D9" />
          <stop offset="1" stopColor="#E3D1FF" />
        </radialGradient>
        <radialGradient
          id={paint4Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(140.402 192.276) scale(277.326 218.758)"
        >
          <stop offset="0.64" />
          <stop offset="0.68" stopColor="#040304" />
          <stop offset="0.72" stopColor="#0F0E11" />
          <stop offset="0.77" stopColor="#232028" />
          <stop offset="0.82" stopColor="#3F3A47" />
          <stop offset="0.87" stopColor="#635B6F" />
          <stop offset="0.92" stopColor="#8F83A0" />
          <stop offset="0.97" stopColor="#C1B2D9" />
          <stop offset="1" stopColor="#E3D1FF" />
        </radialGradient>
        <radialGradient
          id={paint5Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(142.44 -106.116) scale(264.497 208.638)"
        >
          <stop offset="0.64" />
          <stop offset="0.68" stopColor="#040304" />
          <stop offset="0.72" stopColor="#0F0E11" />
          <stop offset="0.77" stopColor="#232028" />
          <stop offset="0.82" stopColor="#3F3A47" />
          <stop offset="0.87" stopColor="#635B6F" />
          <stop offset="0.92" stopColor="#8F83A0" />
          <stop offset="0.97" stopColor="#C1B2D9" />
          <stop offset="1" stopColor="#E3D1FF" />
        </radialGradient>
      </defs>
    </Svg>
  )
}

export default ButtonWrapper
