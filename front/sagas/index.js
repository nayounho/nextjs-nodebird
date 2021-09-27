import { all, fork, call, put } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
