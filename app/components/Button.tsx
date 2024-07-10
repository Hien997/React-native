import React from "react"
import {
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
import { Text, TextProps } from "./Text"

export interface ButtonAccessoryProps {
  style: StyleProp<any>
  pressableState: PressableStateCallbackType
  disabled?: boolean
}

export interface ButtonProps extends PressableProps {
  tx?: TextProps["tx"]
  text?: TextProps["text"]
  txOptions?: TextProps["txOptions"]
  style?: StyleProp<ViewStyle>
  pressedTextStyle?: StyleProp<TextStyle>
  disabledTextStyle?: StyleProp<TextStyle>
  children?: React.ReactNode
  disabled?: boolean
  disabledStyle?: StyleProp<ViewStyle>
  onPress: VoidFunction
}

export function Button(props: ButtonProps) {
  const { tx, text, txOptions, children, disabled, onPress } = props

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Text tx={tx} text={text} txOptions={txOptions}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
