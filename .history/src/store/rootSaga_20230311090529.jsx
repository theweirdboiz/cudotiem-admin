import { all, folk } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([folk(authSaga)]);
}
