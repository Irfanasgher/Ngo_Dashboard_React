import { fork, all } from "redux-saga/effects";

import { handleSignin, handleSignup, handleSignout } from "./auth/sagas";

export default function* rootSaga() {
  yield all([
    // Auth
    // fork(handleSigninSubmit),
    fork(handleSignin),
    fork(handleSignup),
    fork(handleSignout),
    // fork(handleForgotPassword),
    // fork(handleForgotPasswordSubmit),
    // fork(handleChangePassword),
    // fork(refreshTokenonInterval),
    // Users
    // fork(handleGetProfile),
    // fork(handleUpdateProfile),
  ]);
}
