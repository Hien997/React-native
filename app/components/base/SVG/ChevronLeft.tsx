import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const ChevronLeft = (props: SVGProps) => {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.41 1L1.17 5.29a1 1 0 000 1.42l4.24 4.24a1.001 1.001 0 101.42-1.41L3.29 6l3.54-3.54a1 1 0 000-1.41A1 1 0 005.41 1z"
        fill={props.fill || "#070550"}
      />
    </Svg>
  )
}

export default ChevronLeft
