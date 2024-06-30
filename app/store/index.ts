import { ThunkMiddleware, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import createSagaMiddleware from "redux-saga"

import reactotron from "app/devtools/ReactotronConfig"
import logger from "redux-logger"
import exampleSlice from "./login/loginSlice"
import root from "./root"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { login: exampleSlice },
  middleware: (getDM) => getDM().concat(sagaMiddleware as ThunkMiddleware, logger),
  enhancers: (getDE) => getDE().concat(reactotron.createEnhancer?.()),
})

sagaMiddleware.run(root)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
