import React from "react"
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native"
import Typography from "../Typography/Typography"
import { ButtonGreenStyles } from "./Button.styles"
import { colors } from "app/theme"

const GreenButton = (props: {
  disabled?: any
  handleEvent?: any
  progressText?: any
  label?: any
  style?: any
}) => {
  const { style } = props
  return (
    <>
      <TouchableOpacity
        style={[
          ButtonGreenStyles.wrapper,
          !props.disabled ? ButtonGreenStyles.wrapperEnabled : ButtonGreenStyles.wrapperDisabled,
          style,
        ]}
        onPress={props.handleEvent}
        disabled={props.disabled}
      >
        {props.disabled ? (
          <View style={ButtonGreenStyles.loadingWithTextView}>
            <ActivityIndicator size="small" color={colors.palette.secondary600} />
            {props?.progressText && <Typography>{props?.progressText}</Typography>}
          </View>
        ) : (
          <Text style={ButtonGreenStyles.text}>{props.label}</Text>
        )}
      </TouchableOpacity>
    </>
  )
}

export default GreenButton
