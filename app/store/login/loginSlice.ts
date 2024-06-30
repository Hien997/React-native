import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    user: {},
    isLoading: false,
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
})

export const { loginSuccessful, loginFailure } = loginSlice.actions

export default loginSlice.reducer
