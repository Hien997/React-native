import React from "react"
import { Text } from "react-native"
import { sectionStyles } from "./labels.styles"

const SectionLabel = (props: { label: any }) => {
  return <Text style={sectionStyles.text}>{props.label}</Text>
}

export default SectionLabel
