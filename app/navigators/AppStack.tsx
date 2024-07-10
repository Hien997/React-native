import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Screens from "app/screens"
import Login from "app/screens/Login"
import { colors } from "app/theme"
import React from "react"
import { DemoNavigator, DemoTabParamList } from "./DemoNavigator"
import Advocate from "app/screens/Advocate"

export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  Advocate: undefined
  Employee: undefined
  Demo: NavigatorScreenParams<DemoTabParamList>
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
  const isAuthenticated = false
  const mode = "Employee"
  const token = false
  const authRouter = {
    Login: Login,
  }

  const advocateRouter = {
    Advocate: Advocate,
  }

  const employeeRouter = {
    Advocate: Advocate,
  }

  const renderScreen = () => {
    if (isAuthenticated)
      return (
        <>
          <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} />
          <Stack.Screen name="Demo" component={DemoNavigator} />
        </>
      )
    if (!token) return <Stack.Screen name="Login" component={authRouter.Login} />

    return <Stack.Screen name="Advocate" component={advocateRouter.Advocate} />
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      initialRouteName={isAuthenticated ? "Welcome" : "Login"}
    >
      {renderScreen()}
    </Stack.Navigator>
  )
}

export default AppStack
