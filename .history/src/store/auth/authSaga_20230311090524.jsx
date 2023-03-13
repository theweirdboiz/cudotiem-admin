import { takeLatest } from "redux-saga/effects";
import { handleAuthRegister } from "./authHandler";
import { authRegister } from "./authSlice";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
}
