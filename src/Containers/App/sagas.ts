import { put } from "redux-saga/effects";
import { actions as pokemonActions } from "@Containers/Content/Pokemon/reducer";
import { actions } from "./reducer";
import Config from "@ConfigFile";
import type { AppConfig } from "__Types__";

export function* initSaga() {
  // Load config into store
  yield put(actions.updatePokeAppConfig(Config as AppConfig.Models.IConfig));

  // Fetch pokemon
  yield put(pokemonActions.fetchPokemon());
}

export default [];
