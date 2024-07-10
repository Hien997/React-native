import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { GreyButtonStyles } from "./Button.styles"

const GreyButton = (props: { disabled: any; handleEvent: () => void; label: any }) => {
  return (
    <TouchableOpacity
      style={[
        GreyButtonStyles.wrapper,
        {
          opacity: props.disabled ? 0.5 : 1,
        },
      ]}
      onPress={(e) => {
        e.preventDefault()
        props.handleEvent()
      }}
      disabled={props.disabled ?? false}
    >
      <Text style={GreyButtonStyles.text}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default GreyButton
