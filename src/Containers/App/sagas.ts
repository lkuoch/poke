import { fork } from "redux-saga/effects";
import { initSaga as initPokemonSaga } from "@Containers/Content/Pokemon/sagas";

export function* initSaga() {
  // Initialise pokemon sagas
  yield fork(initPokemonSaga);
}

export default [];
