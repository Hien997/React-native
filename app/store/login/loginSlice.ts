import { createSlice } from "@reduxjs/toolkit"
import { signIn } from "./login.action"

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    isLoading: false,
    errors: {},
  },
  reducers: {
    loginSuccessful: (state, action) => {
      state.user = action.payload
      state.isLoading = true
    },
    loginFailure: (state, action) => {
      state.user = action.payload
      state.isLoading = true
    },
  },
  extraReducers: (builders) => {
    builders.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.user = action
    })
    builders.addCase(signIn.rejected, (state: any, action: any) => {
      state.errors = action
    })
  },
})

export const { loginSuccessful, loginFailure } = loginSlice.actions

export default loginSlice.reducer
