import AsyncStorage from "@react-native-async-storage/async-storage"
import Config from "app/config"
import axios from "axios"
import { Platform } from "react-native"
import DeviceInfo from "react-native-device-info"

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const baseURL = Config.API_URL || "https://apidev.themartec.com/v1"

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "User-Agent": `TheMartec-${DeviceInfo.getVersion()}/${Platform.OS} ${Platform.Version}`,
    "TM-Platform": "Mobile_App",
    "TM-OS": `${Platform.OS.toLocaleLowerCase() === "android" ? "ANDROID" : "IOS"}`,
  },
  cancelToken: source.token,
})

let existingPromise: Promise<any> | undefined
const requestRefreshToken = (refreshToken: string) => {
  if (existingPromise) {
    return existingPromise
  } else {
    return (existingPromise = axiosInstance
      .post("/auth/token/refresh", {
        refreshToken: refreshToken,
      })
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
      .finally(() => (existingPromise = undefined)))
  }
}

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const { status } = error.response
    if (status === 401) {
      const originalRequest = error.config
      if (originalRequest.data?.includes("refreshToken")) {
        return Promise.reject(error)
      } else {
        const newAxiosInstance = axios.create()
        const refreshToken = await AsyncStorage.getItem("refresh_token")
        if (refreshToken) {
          const response = await requestRefreshToken(refreshToken)
          if (response?.data?.data) {
            const { token, refresh_token } = response?.data?.data
            if (token && refresh_token) {
              await AsyncStorage.setItem("login_token", token)
              await AsyncStorage.setItem("refresh_token", refresh_token)
              originalRequest._try = true
              originalRequest.headers.Authorization = `Bearer ${token}`
              return newAxiosInstance(originalRequest)
            }
          }
        } else {
          return Promise.reject(error)
        }
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
