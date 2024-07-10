import AsyncStorage from "@react-native-async-storage/async-storage"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "app/services/axiosInstance"
import { IUser } from "./Login.type"

export const signIn = createAsyncThunk("login/users", async (user: IUser, thunkAPI) => {
  try {
    const { email, password } = user
    const res = await axiosInstance.post("/auth/login", {
      email: email,
      password: password,
    })

    const { token, refresh_token: refreshToken } = res?.data?.response?.data

    await AsyncStorage.setItem("login_token", token)
    await AsyncStorage.setItem("refresh_token", refreshToken)

    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`

    return res?.data?.response.data
  } catch (err: any) {
    console.debug("🚀 ~ signIn ~ err:", err?.response)
    return thunkAPI.rejectWithValue(err?.response)
  }
})
