import React from "react"

import { Text } from "react-native"
import { styles } from "./Typography.styles"

const Typography = ({ children, style, variant, ...props }: any) => {
  return (
    <Text {...props} style={[styles.typography, style]}>
      {children}
    </Text>
  )
}

export default Typography
