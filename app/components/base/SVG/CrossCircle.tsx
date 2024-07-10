import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const CrossCircle = (props: SVGProps) => {
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
        d="M4.444 2.06a10 10 0 1111.111 16.63A10 10 0 014.444 2.06zm9.265 4.605a1 1 0 00-1.42 0L10 8.965l-2.29-2.3a1.004 1.004 0 00-1.42 1.42l2.3 2.29-2.3 2.29a.999.999 0 000 1.42 1 1 0 001.42 0l2.29-2.3 2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42l-2.3-2.29 2.3-2.29a1 1 0 000-1.42z"
        fill="#FF7991"
      />
    </Svg>
  )
}

export default CrossCircle
