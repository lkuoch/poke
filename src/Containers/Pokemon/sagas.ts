import { put, call, takeLeading } from "redux-saga/effects";
import { actions } from "./reducer";
import * as dataService from "Services/dataService";
import type { PokemonTypes } from "Core/types";

function* initPokemonViewSaga(action: PokemonTypes.Redux.IActions["initView"]) {
  const pokemonIds = yield call(dataService.RetrieveObjectKeysAsArray, action.payload);

  yield put(actions.updateView(pokemonIds));
}

export default [takeLeading(actions.initView, initPokemonViewSaga)];