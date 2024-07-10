import DismissKeyboard from "app/components/base/DismissKeyboard/DismissKeyboard"
import Logo from "app/components/base/SVG/Logo"
import React from "react"
import { KeyboardAvoidingView, ScrollView, View, useWindowDimensions } from "react-native"
import { styles } from "./Login.styles"
import LoginForm from "./LoginForm.view"

const LoginScreen = ({ navigation, route }: any) => {
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <ScrollView
        contentContainerStyle={
          useWindowDimensions().height < useWindowDimensions().width
            ? styles.scrollViewPortrail
            : styles.scrollView
        }
        keyboardShouldPersistTaps="handled"
      >
        <DismissKeyboard>
          <View style={styles.container}>
            <View>
              <View style={styles.logo}>
                <Logo />
              </View>
              <View>
                {/* <PageTitleLabel label={navigate ? loginSSO : loginText} /> */}
                <LoginForm />
              </View>
            </View>
          </View>
        </DismissKeyboard>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
