import { all, fork } from "redux-saga/effects";

//public
import authSaga from "store/auth/saga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
