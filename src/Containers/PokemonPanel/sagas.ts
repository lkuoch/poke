import { call, put, select, takeLeading } from "redux-saga/effects";
import * as services from "./services";
import { actions, selectors } from "./reducer";
import {
  actions as PokemonActions,
  selectors as PokemonSelectors
} from "Containers/Pokemon/reducer";

function* updateCurrentPokemonSaga() {
  // Prepare data
  const currentPokemonId = yield select(PokemonSelectors.selectViewCurrentId);
  const currentViews = yield select(selectors.selectViews);

  // Data is in store, return
  if (currentPokemonId in currentViews) return;

  // Retrieve data
  const state = yield select();
  const currentPokemonDetail = yield call(services.RetrievePokemonDetails, state, currentPokemonId);

  // Store data
  yield put(
    actions.updateCurrentPokemonDetail({
      id: currentPokemonId,
      value: currentPokemonDetail
    })
  );
}

export default [
  // When the current pokemon is dispatched, select pokemon details and cache it
  takeLeading(
    [PokemonActions.initView, PokemonActions.updateCurrentViewId],
    updateCurrentPokemonSaga
  )
];
