import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const RightArrow = (props: SVGProps) => {
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
        d="M1.17 1a1 1 0 000 1.41L4.71 6 1.17 9.54a1 1 0 101.42 1.41l4.24-4.24a1 1 0 000-1.42L2.59 1a1 1 0 00-1.42 0z"
        fill={props.color || "#DED9DB"}
      />
    </Svg>
  )
}

export default RightArrow
