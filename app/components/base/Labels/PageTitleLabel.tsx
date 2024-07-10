import React from "react"
import { Text } from "react-native"
import { pageTitleStyles } from "./labels.styles"

const PageTitleLabel = (props: { style?: any; label: any }) => {
  return <Text style={[pageTitleStyles.text, props.style]}>{props.label}</Text>
}

export default PageTitleLabel
