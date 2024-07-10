import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const CheckCircle = (props: SVGProps) => {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.444 2.06a10 10 0 1111.111 16.63A10 10 0 014.444 2.06zm8.275 5.105l-4.29 4.3-1.65-1.65a1 1 0 10-1.41 1.41l2.35 2.36a1 1 0 001.41 0l5-5a1.001 1.001 0 10-1.41-1.42z"
        fill="#91DBB6"
      />
    </Svg>
  )
}

export default CheckCircle
