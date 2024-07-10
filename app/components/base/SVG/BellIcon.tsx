import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const BellIcon = (props: SVGProps) => {
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 11.18V8a6 6 0 00-5-5.91V1a1 1 0 00-2 0v1.09A6 6 0 002 8v3.18A3 3 0 000 14v2a1 1 0 001 1h3.14a4 4 0 007.72 0H15a1 1 0 001-1v-2a3 3 0 00-2-2.82zM4 8a4 4 0 018 0v3H4V8zm4 10a2 2 0 01-1.72-1h3.44A2 2 0 018 18zm6-3H2v-1a1 1 0 011-1h10a1 1 0 011 1v1z"
        fill="#070550"
      />
    </Svg>
  )
}

export default BellIcon
