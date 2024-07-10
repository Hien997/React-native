import axiosInstance from "./axiosInstance"
// import DeviceInfo from "react-native-device-info"
import { Platform } from "react-native"
import configDev from "app/config/config.dev"

const baseURL = configDev.API_URL || "https://apidev.themartec.com/v1"

const getUserInfo = async () => {
  try {
    const { data: response } = await axiosInstance.get("/advocate/getUserById")
    return response?.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const setUserInfo = async (token: any, user: { adv_id: any }) => {
  try {
    const newUserInfo: any = { ...user, advId: user.adv_id }
    delete newUserInfo.adv_id
    const fd = new FormData()
    if (newUserInfo?.profilePicture !== undefined) {
      fd.append("profile_picture", newUserInfo?.profilePicture)
    }
    fd.append("data", JSON.stringify(newUserInfo))
    fetch(`${baseURL}/advocate/updateUserById`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
        // "User-Agent": `TheMartec-${DeviceInfo.getVersion()}/${Platform.OS} ${Platform.Version}`,
        "TM-Platform": "Mobile_App",
        "TM-OS": `${Platform.OS.toLocaleLowerCase() === "android" ? "ANDROID" : "IOS"}`,
      },
      body: fd,
    })
  } catch (error) {
    console.error("momo joy", error)
    throw error
  }
}

const userLogout = async (data: any) => {
  try {
    await axiosInstance.post("/auth/logout", data)
  } catch (error) {
    console.error("logout error", error)
    throw error
  }
}

export default { getUserInfo, setUserInfo, userLogout }
