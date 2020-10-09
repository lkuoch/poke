import { all } from "redux-saga/effects";

import appSagas from "Containers/App/sagas";

// Global registration of saga components
export default function* rootSagas() {
  yield all([...appSagas]);
}
