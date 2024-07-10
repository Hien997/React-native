import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const Hamburger = (props: SVGProps) => {
  return (
    <Svg
      width={18}
      height={10}
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.75 1.775c0-.207.167-.375.374-.375h15.75c.207 0 .375.168.375.375v.45a.375.375 0 01-.375.375H1.124a.375.375 0 01-.375-.375v-.45z"
        fill="#070550"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.28 1.775c0-.466.378-.843.844-.843h15.75c.466 0 .844.377.844.843v.45a.844.844 0 01-.844.844H1.124a.844.844 0 01-.843-.844v-.45zm.938.094v.263h15.563v-.263H1.218z"
        fill="#070550"
      />
      <Path
        d="M.75 7.775c0-.207.167-.375.374-.375h15.75c.207 0 .375.168.375.375v.45a.375.375 0 01-.375.375H1.124a.375.375 0 01-.375-.375v-.45z"
        fill="#070550"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.28 7.775c0-.466.378-.843.844-.843h15.75c.466 0 .844.377.844.843v.45a.844.844 0 01-.844.844H1.124a.844.844 0 01-.843-.844v-.45zm.938.094v.263h15.563v-.263H1.218z"
        fill="#070550"
      />
    </Svg>
  )
}

export default Hamburger
