import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { SVGProps } from "./SVG.props"

const SwitchIcon = (props: SVGProps) => (
  <Svg
    width={props.width || 40}
    height={props.height || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="white" />
    <Path
      d="M25.273 22.3397H22.253C22.0762 22.3397 21.9066 22.4099 21.7816 22.5349C21.6566 22.66 21.5863 22.8295 21.5863 23.0063C21.5863 23.1832 21.6566 23.3527 21.7816 23.4777C21.9066 23.6028 22.0762 23.673 22.253 23.673H23.853C23.1176 24.4415 22.1693 24.9726 21.1298 25.1979C20.0903 25.4233 19.0071 25.3327 18.0195 24.9378C17.0319 24.5429 16.1849 23.8617 15.5874 22.9818C14.9899 22.1018 14.6691 21.0633 14.6663 19.9997C14.6663 19.8229 14.5961 19.6533 14.4711 19.5283C14.3461 19.4032 14.1765 19.333 13.9997 19.333C13.8229 19.333 13.6533 19.4032 13.5283 19.5283C13.4032 19.6533 13.333 19.8229 13.333 19.9997C13.3365 21.3015 13.7212 22.5739 14.4394 23.6597C15.1577 24.7455 16.1781 25.5972 17.3748 26.1098C18.5716 26.6224 19.8922 26.7734 21.1737 26.5441C22.4552 26.3148 23.6416 25.7154 24.5863 24.8197V25.9997C24.5863 26.1765 24.6566 26.3461 24.7816 26.4711C24.9066 26.5961 25.0762 26.6663 25.253 26.6663C25.4298 26.6663 25.5994 26.5961 25.7244 26.4711C25.8494 26.3461 25.9197 26.1765 25.9197 25.9997V22.9997C25.918 22.8274 25.8498 22.6625 25.7292 22.5395C25.6087 22.4164 25.4452 22.3448 25.273 22.3397ZM19.9997 13.333C18.2906 13.3379 16.6487 13.999 15.413 15.1797V13.9997C15.413 13.8229 15.3428 13.6533 15.2177 13.5283C15.0927 13.4032 14.9232 13.333 14.7463 13.333C14.5695 13.333 14.4 13.4032 14.2749 13.5283C14.1499 13.6533 14.0797 13.8229 14.0797 13.9997V16.9997C14.0797 17.1765 14.1499 17.3461 14.2749 17.4711C14.4 17.5961 14.5695 17.6663 14.7463 17.6663H17.7463C17.9232 17.6663 18.0927 17.5961 18.2177 17.4711C18.3428 17.3461 18.413 17.1765 18.413 16.9997C18.413 16.8229 18.3428 16.6533 18.2177 16.5283C18.0927 16.4032 17.9232 16.333 17.7463 16.333H16.1463C16.8813 15.5649 17.8291 15.034 18.8679 14.8084C19.9068 14.5828 20.9894 14.6728 21.9767 15.0669C22.9641 15.461 23.8111 16.1411 24.4092 17.0201C25.0072 17.899 25.3289 18.9366 25.333 19.9997C25.333 20.1765 25.4032 20.3461 25.5283 20.4711C25.6533 20.5961 25.8229 20.6663 25.9997 20.6663C26.1765 20.6663 26.3461 20.5961 26.4711 20.4711C26.5961 20.3461 26.6663 20.1765 26.6663 19.9997C26.6663 19.1242 26.4939 18.2573 26.1589 17.4485C25.8238 16.6396 25.3328 15.9047 24.7137 15.2856C24.0947 14.6666 23.3597 14.1755 22.5509 13.8405C21.7421 13.5054 20.8752 13.333 19.9997 13.333Z"
      fill="#070550"
    />
  </Svg>
)

export default SwitchIcon
