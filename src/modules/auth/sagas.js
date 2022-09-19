import { call, take, put, takeEvery } from "redux-saga/effects";
import { message } from "antd";
import authActions, { SIGN_IN, SIGN_OUT, SIGN_UP } from "./actions";
import { setTokens } from "./../common/utils";
import authApi from "../../services/auth";

export function* handleSignin() {
  while (true) {
    try {
      const { payload } = yield take(SIGN_IN.REQUEST);
      const data = yield call(authApi.signin, payload);
      setTokens(data.tokens, data.user);
      console.log(
        "🚀 ~ file: sagas.js ~ line 11 ~ function*handleSignin ~ data",
        data
      );
      yield put(authActions.signin.success(data));
    } catch (e) {
      yield put(authActions.signin.failure(e.response.data.message));
      message.error(e?.response?.data?.message, 5);
      throw e;
      // Alert.alert('Login Failed', e.response.data.message);
    }
  }
}

export function* handleSignup() {
  while (true) {
    try {
      const { payload } = yield take(SIGN_UP.REQUEST);
      const data = yield call(authApi.signup, payload);
      yield put(authActions.signup.success(data));
    } catch (e) {
      // Alert.alert('Signup Failed', e.response.data.message);
      yield put(authActions.signup.failure(e.response.data.message));
    }
  }
}

export function* handleSignout() {
  while (true) {
    try {
      const { payload } = yield take(SIGN_OUT.REQUEST);
      // console.log('payload in saga', payload);
      // console.log(yield call(authApi.signout, payload));
      let data = "";
      yield put(authActions.signout.success(data));
    } catch (e) {
      console.log(e);
      yield put(authActions.signout.failure(e.response.data.message));
      // Alert.alert('Some Problem in Signout', e.response.data.message);
    }
  }
}
