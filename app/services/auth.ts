import AsyncStorage from "@react-native-async-storage/async-storage"
import axiosInstance from "./axiosInstance"

const authLogin = async ({ email, password }: any) => {
  try {
    console.log("calling user login ==> ", email, password)
    const { data: response } = await axiosInstance.post("/auth/login", {
      email,
      password,
    })
    const { token, refresh_token: refreshToken } = response?.data
    await AsyncStorage.setItem("login_token", token)
    await AsyncStorage.setItem("refresh_token", refreshToken)
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
    return response?.data
  } catch (err: any) {
    throw err?.response
  }
}

export default { authLogin }
