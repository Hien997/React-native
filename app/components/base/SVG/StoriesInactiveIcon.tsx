import * as React from "react"
import { SvgXml } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const StoriesInactiveIcon = (props: SVGProps) => {
  const xml = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.61358 1C6.61358 0.585786 6.94937 0.25 7.36358 0.25H14.6363C15.0505 0.25 15.3863 0.585786 15.3863 1V4.62735L15.3864 4.63647V8.04448L20.7046 5.76523C20.9363 5.66592 21.2025 5.68968 21.4129 5.82846C21.6234 5.96724 21.7501 6.20249 21.7501 6.45459V15.5455C21.7501 15.7976 21.6234 16.0329 21.4129 16.1716C21.2025 16.3104 20.9363 16.3342 20.7046 16.2349L15.3864 13.9556V17.3637C15.3864 17.778 15.0506 18.1137 14.6364 18.1137H1C0.585786 18.1137 0.25 17.778 0.25 17.3637V4.63647C0.25 4.22226 0.585786 3.88647 1 3.88647H13.8863V1.75H7.36358C6.94937 1.75 6.61358 1.41421 6.61358 1ZM13.8863 5.54545V5.38647H1.75V16.6137H13.8864V5.55458L13.8863 5.54545ZM15.3864 12.3237V9.67641L20.2501 7.592V14.4081L15.3864 12.3237ZM5.54547 8.27262C5.54547 8.77469 5.13845 9.18171 4.63637 9.18171C4.1343 9.18171 3.72728 8.77469 3.72728 8.27262C3.72728 7.77054 4.1343 7.36353 4.63637 7.36353C5.13845 7.36353 5.54547 7.77054 5.54547 8.27262Z" fill="#6B6B73"/>
  </svg>`
  return <SvgXml xml={xml} />
}

export default StoriesInactiveIcon
