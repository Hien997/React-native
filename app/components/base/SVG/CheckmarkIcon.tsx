import * as React from "react"
import { SvgXml } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const CheckmarkIcon = (props: SVGProps) => {
  const { width, height } = props
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6585 4.04749C22.0742 4.41117 22.1163 5.04293 21.7526 5.45857L9.15259 19.8586C8.97705 20.0592 8.72868 20.1814 8.46263 20.1981C8.19658 20.2148 7.93488 20.1246 7.73565 19.9475L2.33565 15.1475C1.92286 14.7806 1.88568 14.1485 2.2526 13.7357C2.61952 13.3229 3.25159 13.2857 3.66437 13.6527L8.3111 17.7831L20.2474 4.14156C20.6111 3.72592 21.2429 3.6838 21.6585 4.04749Z" fill="#34B675"/>
    </svg>`
  return <SvgXml xml={xml} width={width} height={height} />
}

export default CheckmarkIcon
