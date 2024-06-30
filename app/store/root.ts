import { all, fork } from "redux-saga/effects"
import loginSaga from "./login/loginSaga"

const sagas = [
    loginSaga
]

export default function* root(): any {
  yield all(sagas.map(fork))
}
