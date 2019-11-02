import { put, take, fork, takeLatest, select } from "redux-saga/effects";
import { actions as appActions, selectors as appSelectors } from "@Containers/App/redux";
import { actions } from "./redux";

function* fetchPokemonSaga() {
  // Get endpoint from config
  const { endpoints } = yield select(appSelectors.selectPokeConfig);

  console.log("config", endpoints);
}

export default [takeLatest(actions.fetchPokemon, fetchPokemonSaga)];
