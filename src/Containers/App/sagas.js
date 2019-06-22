import { put, take, takeLatest } from "redux-saga/effects";
import * as app from "./actions";

function* changeThemeSaga(action) {
  console.log("SAGA", action);

  yield put(app.updateTheme());
}

export default [takeLatest(app.changeTheme, changeThemeSaga)];
