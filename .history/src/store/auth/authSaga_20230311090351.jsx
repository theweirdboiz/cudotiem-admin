import { takeLatest } from "redux-saga";
import { handleAuthRegister } from "./authHandler";
import { authRegister } from "./authSlice";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
}
