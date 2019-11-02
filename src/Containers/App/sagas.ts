import { put } from "redux-saga/effects";

import { actions } from "./redux";
import { actions as pokemonActions } from "@Containers/Content/Pokemon/redux";
import Config from "@Config";

export function* initSaga() {
  // Load config into store
  yield put(actions.updatePokeAppConfig(Config));

  // Fetch pokemon
  yield put(pokemonActions.fetchPokemon());
}

export default [];
