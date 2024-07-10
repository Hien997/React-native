import Axios, { AxiosRequestConfig } from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import configDev from "app/config/config.dev"

const baseURL = configDev.API_URL || "https://apidev.themartec.com/v1"

const apiInstance = Axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

apiInstance.interceptors.request.use(
  async (config: any) => {
    const token = (await AsyncStorage.getItem("tok")) as string
    const parsedToken = JSON.parse(token)
    if (parsedToken) {
      config.headers.Authorization = "Bearer " + parsedToken.access_token
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

const getApi = (pathname: string, params: AxiosRequestConfig<any> | undefined) => {
  return apiInstance.get(pathname, params)
}

const postApi = (pathname: string, params: any, options: AxiosRequestConfig<any> | undefined) => {
  return apiInstance.post(pathname, params, options)
}

const putApi = (pathname: string, params: any, options: AxiosRequestConfig<any> | undefined) => {
  return apiInstance.put(pathname, params, options)
}

const deleteApi = (pathname: string, options: AxiosRequestConfig<any> | undefined) => {
  return apiInstance.delete(pathname, options)
}

export { getApi, postApi, putApi, deleteApi }
