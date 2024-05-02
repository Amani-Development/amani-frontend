import { all, fork } from "redux-saga/effects";

//public
import authSaga from "store/auth/saga";
// waitlist
import waitlistSaga from "./waitlist/saga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(waitlistSaga)]);
}
