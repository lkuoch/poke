import { fork } from "redux-saga/effects";
import { initSaga as initPokemonSaga } from "@Containers/Content/Pokemon/sagas";
import Config from "@Config";

export function* initSaga() {
  // Load config
  console.log('config', Config);

  // Initialise pokemon sagas
  yield fork(initPokemonSaga);
}

export default [];
