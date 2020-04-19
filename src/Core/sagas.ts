import { all, fork } from "redux-saga/effects";

import appSagas, { initSaga } from "Containers/App/sagas";
import pokemonSagas from "Containers/Pokemon/sagas";
import pokemonPanelSagas from "Containers/PokemonPanel/sagas";

// Global registration of saga components
export default function* rootSagas() {
  // Listen on action events
  yield all([...appSagas, ...pokemonSagas, ...pokemonPanelSagas]);

  // Initialise app
  yield fork(initSaga);
}
