import { all, fork } from "redux-saga/effects";

//* App
import appSagas, { initSaga } from "Containers/App/sagas";
import pokemonSagas from "Containers/Pokemon/sagas";

// Global registration of saga components
export default function* rootSagas() {
  // Listen on action events
  yield all([
    ...appSagas,
    ...pokemonSagas
  ]);

  // Initialise app
  yield fork(initSaga);
}
