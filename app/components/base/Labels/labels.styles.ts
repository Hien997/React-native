import { colors } from "app/theme"
import { StyleSheet } from "react-native"

export const pageTitleStyles = StyleSheet.create({
  text: {
    color: colors.palette.secondary100,
    fontFamily: "RightGrotesk-Medium",
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 32,
    marginBottom: 10,
    marginTop: 10,
  },
})

export const sectionStyles = StyleSheet.create({
  text: {
    color: colors.palette.gray200,
    fontFamily: "Objective-Bold",
    fontSize: 11,
    fontWeight: "normal",
    letterSpacing: 3,
    lineHeight: 16,
    marginBottom: 5,
    marginTop: 5,
    textTransform: "uppercase",
  },
})
