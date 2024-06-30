import { call, put, takeEvery } from 'redux-saga/effects'
import { loginSuccessful } from './loginSlice';

function* login(): any {
    const req = yield call(() => fetch('http://api-login.com'))
    yield put(loginSuccessful(req))
} 

function* loginSaga() {
  yield takeEvery("login", login)
}

export default loginSaga;