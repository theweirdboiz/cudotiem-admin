import { all, folk } from "redux-saga";
export default function* rootSaga() {
  yield all([folk(authSaga)]);
}
