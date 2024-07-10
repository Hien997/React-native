import { yupResolver } from "@hookform/resolvers/yup"
import GreenButton from "app/components/base/Buttons/GreenButton"
import SectionLabel from "app/components/base/Labels/SectionLabel"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { Text, TextInput, View } from "react-native"
import { schemaLogin } from "./Login.config"
import { styles } from "./Login.styles"
import { signIn } from "app/store/login/login.action"
import { IUser } from "app/store/login/Login.type"
import { useAppDispatch } from "app/store"

const LoginForm = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  })

  const onSubmit = (value: IUser) => {
    try {
      dispatch(signIn(value))
      // .unwrap()
      // .then((originalPromiseResult) => {
      //   console.debug("🚀 ~ .then ~ originalPromiseResult:", originalPromiseResult)
      //   // handle result here
      // })
      // .catch((error) => {
      //   console.debug("🚀 ~ onSubmit ~ rejectedValueOrSerializedError:", error.message)
      //   // handle error here
      // })
    } catch (err) {
      console.log("errror", err)
    }
  }

  return (
    <>
      <SectionLabel label={"Email"} />
      <View
        style={{
          ...styles.inputView,
          marginBottom: errors?.email ? 0 : 10,
        }}
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.TextInput}
              placeholder="eg.: nathan@themartec.com"
              secureTextEntry={false}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCorrect={false}
              autoCapitalize="none"
            />
          )}
          name="email"
        />
      </View>
      {errors?.email ? errors.email : null}
      <SectionLabel label={"Password"} />
      <View
        style={{
          ...styles.inputView,
          marginBottom: errors?.password ? 0 : 10,
        }}
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.TextInput}
              placeholder="***********"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
      </View>
      {errors?.password ? errors?.password : null}
      <View style={styles.resetPassContainer}>
        <Text
          style={styles.resetPassText}
          onPress={() => {
            // navigation.push("ResetPass")
          }}
        >
          Forgot password?
        </Text>
      </View>
      <View style={styles.login}>
        <GreenButton
          label={"Login"}
          handleEvent={handleSubmit(onSubmit)}
          style={styles.buttonWrapper}
          // disabled={isProcessing}
        />
      </View>
      {/* <TouchableOpacity onPress={() => setNavigate(!navigate)} style={styles.ssoContainer}>
        <Text style={styles.ssoText}>{navigate ? loginOriginal : orLoginSSO}</Text>
      </TouchableOpacity> */}
    </>
  )
}

export default LoginForm
