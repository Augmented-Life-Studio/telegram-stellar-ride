import * as React from 'react'
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={286} height={284} fill="none" {...props}>
    <path
      fill="url(#a-profileBorder)"
      fillRule="evenodd"
      d="M283.994 83.648c-1.945-30.289-6.391-54.465-12.782-60.856C255.928 7.787 220.359.006 142.831.006 65.302.006 29.733 7.509 14.45 22.792 8.059 29.183 3.89 53.082 1.667 83.648.556 100.599 0 120.05 0 139.502c.278 24.731 1.39 49.463 3.612 70.582 0 .555.278 1.111.278 1.667 2.223 21.397 5.836 38.625 10.282 46.684.834 1.667 1.667 2.779 2.5 3.612C31.402 276.497 65.859 284 142.832 284c76.973 0 111.43-7.503 126.158-21.953.833-.833 1.667-1.945 2.501-3.612 4.723-8.614 8.058-26.121 10.559-48.073 2.223-21.119 3.335-46.129 3.612-70.86 0-19.452-.555-38.625-1.667-55.854Zm-28.066-10.004c2.223 21.675 2.779 43.905 2.501 65.58 0 23.064-.834 46.406-3.334 69.192-.834 7.503-3.335 27.233-6.67 35.569-17.228 12.505-88.088 12.783-105.594 12.783-17.507 0-88.366 0-105.595-12.783-3.334-8.058-5.835-28.066-6.67-35.569-2.5-22.786-3.334-46.128-3.334-69.192-.278-21.675.278-43.905 2.501-65.58.556-7.225 2.501-25.287 5.558-33.068 17.784-13.06 89.477-13.338 107.54-13.338 18.062 0 89.755 0 107.54 13.339 3.056 7.78 5.001 26.12 5.557 33.067Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#b-profileBorder)"
      fillRule="evenodd"
      d="M278.998 102.265c0-12.227-1.111-24.732-2.501-36.959-.556-4.724-1.945-16.117-4.168-25.287v-.555c-1.389-5.836-3.057-10.56-5.28-12.783-8.058-8.059-21.674-12.227-33.068-14.728h-.277c-1.39-.278-3.057-.555-4.447-.833-11.948-2.223-24.175-3.335-36.124-4.169-16.673-1.111-33.624-1.389-50.296-1.389-16.673 0-33.624.278-50.297 1.39-11.949.833-24.453 1.945-36.124 4.168-1.39.278-3.057.555-4.446.833h-.278c-11.671 2.501-25.287 6.67-33.068 14.728-2.223 2.223-3.89 6.947-5.28 12.783v.555c-2.223 9.17-3.612 20.563-4.168 25.287-1.39 12.227-2.223 24.454-2.779 36.959-.278 12.226-.278 24.731-.278 36.68.278 12.782.556 25.565 1.39 38.625.555 12.783 1.945 25.565 3.334 38.07 1.112 7.781 5.002 34.735 10.838 40.57 8.892 8.615 24.731 12.505 36.68 14.728 11.67 1.945 23.342 3.057 35.29 3.89 16.396 1.112 32.791 1.39 49.186 1.39 16.395 0 32.79-.278 49.184-1.39 11.671-.833 23.62-1.945 35.291-3.89 11.671-2.223 27.788-6.113 36.681-14.728 5.557-5.835 9.725-32.789 10.559-40.848 1.667-12.505 2.779-25.287 3.613-38.07.833-12.782 1.111-25.565 1.389-38.347 0-11.949 0-24.454-.556-36.68Zm-15.005 72.526a727.916 727.916 0 0 1-2.501 35.291c-.834 6.392-1.39 12.783-2.501 19.174-.834 5.836-2.223 13.06-4.446 18.618 0 .556-.278.834-.556 1.389-.278.278-.834.556-1.112.834-9.17 6.947-30.567 10.56-52.797 12.505-21.953 1.667-45.017 1.945-57.243 1.945-12.227 0-35.291-.278-57.522-1.945-21.952-1.945-43.35-5.558-52.52-12.505-.555-.278-.833-.556-1.11-.834-.279-.555-.556-.833-.834-1.389-2.223-5.558-3.335-12.782-4.169-18.618a235.412 235.412 0 0 1-2.5-18.896 780.299 780.299 0 0 1-2.501-35.291c-.556-11.949-.834-23.62-.556-35.291 0-11.115 0-22.23.556-33.345.555-11.116 1.111-22.23 2.223-33.346.833-5.836 1.389-11.671 2.5-17.506.834-5.28 1.946-11.95 3.89-16.951 0-.556.279-.834.557-1.39.277-.278.833-.555 1.111-1.111 9.448-6.67 30.845-10.282 53.075-12.227 22.231-1.945 45.295-2.223 57.8-2.223 12.504 0 35.29.278 57.521 2.223 22.23 1.945 43.905 5.558 53.075 12.505.556.278.834.556 1.39.833.277.556.277 1.112.555 1.39 1.945 5.28 3.057 11.67 3.891 16.95 1.111 5.836 1.667 11.671 2.223 17.507 1.389 11.115 1.945 22.23 2.501 33.346.277 11.115.555 22.23.555 33.345 0 11.671 0 23.342-.555 35.013Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    <path
      fill="url(#c-profileBorder)"
      fillRule="evenodd"
      d="M22.78 25.293C48.903 5.286 95.309 4.174 142.826 4.174c47.518 0 93.924 1.112 120.045 21.119 10.281 7.78 17.506 37.514 21.119 58.633-2.223-30.567-6.391-54.465-12.783-60.856C255.923 7.787 220.354.006 142.825.006c-77.528 0-113.097 7.503-128.38 22.786-6.392 6.391-10.838 30.29-13.061 60.856 3.89-21.119 11.115-50.574 21.119-58.355h.278Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    <path
      fill="url(#d-profileBorder)"
      fillRule="evenodd"
      d="M142.828 281.5c-47.518 0-93.924-1.389-120.045-22.786-8.614-6.947-15.005-29.177-19.174-48.629 2.78 26.121 7.225 45.85 13.06 51.686 14.728 14.727 49.186 21.952 126.159 21.952 76.973 0 111.43-7.502 126.158-21.952 5.835-5.836 10.281-25.843 13.06-51.686-4.168 19.452-10.837 41.682-19.174 48.629-26.121 21.397-72.527 22.786-120.044 22.786Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    <path
      fill="url(#e-profileBorder)"
      fillRule="evenodd"
      d="M126.709 15.57c-26.121 2.778-74.75 4.445-95.035 17.228-6.67 4.168-12.505 19.174-15.006 15.283-1.667-2.5 2.5-15.839 7.78-21.952a24.23 24.23 0 0 1 6.114-5.002C51.125 9.734 101.144 6.955 126.709 9.178c6.947.556 12.504 1.945 12.226 3.335 0 1.39-5.279 2.5-12.782 3.056h.556Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    <path
      fill="url(#f-profileBorder)"
      fillRule="evenodd"
      d="M178.957 268.16c21.119-2.223 59.467-6.113 75.028-16.951 3.891-2.779 5.002-15.005 7.781-12.782 1.667 1.667 1.945 12.782-3.613 18.062-10.837 10.004-54.742 16.117-79.196 15.839-5.279 0-10.003-.278-10.003-1.389 0-1.112 4.168-2.223 10.003-2.779Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    <defs>
      <radialGradient
        id="a-profileBorder"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(27.232 -3.884) scale(386.532)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2592FF" />
        <stop offset={1} stopColor="#003C99" />
      </radialGradient>
      <radialGradient
        id="b-profileBorder"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(16.679 -6.109) scale(505.465)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B309F" />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="c-profileBorder"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(141.436 251.21) scale(265.932)"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={0.1} stopColor="#00040B" />
        <stop offset={0.28} stopColor="#00102B" />
        <stop offset={0.52} stopColor="#00235E" />
        <stop offset={0.8} stopColor="#003DA4" />
        <stop offset={1} stopColor="#0051D8" />
      </radialGradient>
      <radialGradient
        id="d-profileBorder"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(141.438 78.37) scale(226.473)"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={0.1} stopColor="#00040B" />
        <stop offset={0.28} stopColor="#00102B" />
        <stop offset={0.52} stopColor="#00235E" />
        <stop offset={0.8} stopColor="#003DA4" />
        <stop offset={1} stopColor="#0051D8" />
      </radialGradient>
      <radialGradient
        id="e-profileBorder"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(-2.506 -53.9) scale(289.274)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.89} stopColor="#1D1D1D" />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="f-profileBorder"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(299.28 290.113) scale(214.802)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAFEFF" />
        <stop offset={0.89} stopColor="#131D1D" />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
)
export default SvgComponent