import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const ButtonSmallWrapper: React.FC<SvgProps> = ({ width, height, viewBox, ...props }) => {
  const uniqueId = `clip-${Math.random().toString(36).substring(2, 9)}`
  const paint0Id = `paint0-${uniqueId}`
  const paint1Id = `paint1-${uniqueId}`
  const paint2Id = `paint2-${uniqueId}`
  const paint3Id = `paint3-${uniqueId}`
  const paint4Id = `paint4-${uniqueId}`
  const paint5Id = `paint5-${uniqueId}`
  const paint6Id = `paint6-${uniqueId}`

  return (
    <Svg
      width={width || '48'}
      height={height || '48'}
      viewBox={viewBox || '0 0 48 48'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${uniqueId})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.80585 43.9916C1.00209 42.1879 0.0501044 32.6681 0 23.3987C0 14.38 0.751566 5.51148 2.45511 3.80793C5.01044 1.25261 10.9729 0 24 0C37.0271 0 42.9896 1.25261 45.5449 3.80793C47.2484 5.51148 48.0501 14.38 48 23.3987C47.9499 32.6681 46.9979 42.1879 45.1942 43.9415C42.6889 46.3967 36.9269 47.6493 24 47.6493C11.0731 47.6493 5.31106 46.3967 2.80585 43.9415V43.9916Z"
          fill={`url(#${paint0Id})`}
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.15871 42.238C8.26727 47.2484 39.7829 47.2484 43.8915 42.238C45.2944 41.0355 46.1462 37.0271 46.5971 32.9687C47.0481 28.9603 47.1984 24.8518 47.1984 23.3486C47.1984 22.2463 47.1483 19.9916 46.8977 17.4363C46.6973 14.881 46.3466 12.0251 45.7955 9.67014C45.094 6.61378 42.7892 4.15866 39.5324 3.4572C28.8101 1.2025 19.4907 1.1524 8.5679 3.4572C5.26101 4.15866 3.00631 6.56367 2.30485 9.67014C1.7537 12.0251 1.40297 14.881 1.15245 17.4864C0.952033 20.0418 0.851824 22.2965 0.901928 23.3987C0.901928 24.952 1.05224 29.0104 1.50318 33.0689C1.95412 37.1273 2.80589 41.1357 4.20882 42.3382L4.15871 42.238Z"
          fill={`url(#${paint1Id})`}
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.60538 42.7891C1.80371 41.9374 1.15236 39.5324 0.701416 36.2255C1.15236 40.1336 1.85382 43.0397 2.8058 43.9415C5.31102 46.3967 11.073 47.6493 24 47.6493C36.9269 47.6493 42.6889 46.3967 45.1941 43.9415C45.7954 43.3403 46.2964 41.8873 46.6972 39.833C46.3465 41.2359 45.9457 42.2881 45.4947 42.7891C40.2839 48.3507 7.56572 48 2.60538 42.7891Z"
          fill={`url(#${paint2Id})`}
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.05637 5.26096C8.11691 -0.300627 39.8831 -0.300627 44.9436 5.26096C45.6451 6.01253 46.2965 7.91649 46.7975 10.6221C47.2484 12.9269 47.6493 15.833 47.9499 18.9896C47.7495 11.6743 46.9478 5.26096 45.5449 3.80793C42.9896 1.25261 37.0271 0 24 0C10.9729 0 5.01044 1.25261 2.45511 3.80793C1.05219 5.21086 0.250522 11.6242 0 18.9395C0.300626 15.833 0.651357 12.9269 1.1524 10.572C1.70355 7.91649 2.35491 5.96242 3.00626 5.21086L3.05637 5.26096Z"
          fill={`url(#${paint3Id})`}
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4885 20.2923C24.1002 20.3925 39.9832 16.785 46.2964 12.5261C46.1461 11.524 45.9457 10.5219 45.7452 9.62004C45.0438 6.56367 42.739 4.10856 39.4822 3.4071C28.7599 1.1524 19.4404 1.1023 8.51769 3.4071C5.2108 4.10856 2.9561 6.51357 2.25464 9.62004C2.05422 10.5219 1.8538 11.4739 1.70349 12.476C4.55944 16.2338 12.8768 20.2422 18.5386 20.3424L18.4885 20.2923Z"
          fill={`url(#${paint4Id})`}
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.0105 38.1795C25.0522 38.1795 9.21925 40.1336 3.70776 41.6868C3.85808 41.8873 4.00839 42.0877 4.1587 42.1879C8.26726 47.1983 39.7829 47.1983 43.8915 42.1879C44.0418 42.0376 44.2422 41.8372 44.3925 41.6367C41.1357 40.0334 32.9687 38.1795 29.0105 38.1795Z"
          fill={`url(#${paint5Id})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8935 3.4071C21.7954 4.35908 5.01039 11.0731 4.25882 11.0731C3.45715 11.0731 3.65757 8.86847 5.66174 6.51357C7.96654 3.75783 20.0417 2.45511 20.9436 3.4071H20.8935Z"
          fill="white"
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.3424 39.3319C42.7891 39.3319 36.5261 41.5866 33.4697 43.9415C31.3653 45.5449 40.4342 43.8413 42.8894 42.3382C44.6931 41.2359 45.1942 39.3319 44.3424 39.3319Z"
          fill={`url(#${paint6Id})`}
        />
      </g>
      <defs>
        <radialGradient
          id={paint0Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.300628 -1.05219) scale(71.7996 71.7996)"
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
          gradientTransform="translate(-10.572 -28.6597) scale(107.925 107.925)"
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
          gradientTransform="translate(24.501 2.75573) scale(50.5052 50.5052)"
        />
        <radialGradient
          id={paint3Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.1503 43.7411) scale(48.7516 48.7516)"
        />
        <radialGradient
          id={paint4Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.26508 -50.6054) scale(95.9499 95.9499)"
        >
          <stop stopColor="#9D8DFF" />
          <stop offset="0.89" stopColor="#12101D" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id={paint5Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(71.5491 119.9) scale(127.967 127.967)"
        >
          <stop stopColor="#9D8DFF" />
          <stop offset="0.89" stopColor="#12101D" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id={paint6Id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.334 34.2213) scale(22.547 22.547)"
        >
          <stop stopColor="#9D8DFF" />
          <stop offset="0.89" stopColor="#12101D" />
          <stop offset="1" />
        </radialGradient>
        <clipPath id={uniqueId}>
          <rect width="48" height="47.6493" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default ButtonSmallWrapper
