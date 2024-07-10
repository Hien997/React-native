import { colors } from "app/theme"
import { StyleSheet, ViewStyle } from "react-native"

export const ButtonGreenStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  wrapperEnabled: {
    backgroundColor: colors.palette.primary200,
    borderColor: colors.palette.primary200,
  },
  wrapperDisabled: {
    backgroundColor: colors.palette.gray200,
    borderColor: colors.palette.gray200,
  },
  text: {
    color: colors.palette.secondary100,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  loadingWithTextView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})

export const GreyButtonStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 10,
    backgroundColor: "#FAF7F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FAF7F8",
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: "#070550",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
})
