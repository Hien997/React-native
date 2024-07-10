import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const BackArrow = (props: SVGProps) => {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.003 8.621a1 1 0 000 .764 1 1 0 00.212.325l7.07 7.071A1 1 0 009.7 15.367L4.333 10l11.731.007a1 1 0 00.929-1.39A1 1 0 0016.064 8l-11.73.007L9.7 2.639a1 1 0 00-1.414-1.414l-7.071 7.07a1 1 0 00-.212.326z"
        fill="#070550"
      />
    </Svg>
  )
}

export default BackArrow
