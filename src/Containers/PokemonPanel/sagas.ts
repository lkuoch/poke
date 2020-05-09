import { call, put, select, takeLeading } from "redux-saga/effects";
import * as services from "./services";
import { actions, selectors } from "./reducer";
import { selectors as AppSelectors } from "Containers/App/reducer";
import { actions as PokemonActions, selectors as PokemonSelectors } from "Containers/Pokemon/reducer";
import * as dataServices from "Services/dataService";

function* updateSharedSaga() {
  // Pre data check
  const shared = yield select(selectors.selectShared);

  // Data is in store, return
  if (!dataServices.IsObjectEmpty(shared)) return;

  // Process data
  const state = yield select();
  const sharedData = yield call(services.RetrieveSharedDetails, state);

  // Store data
  yield put(actions.updateShared(sharedData));
}

function* updateViewsSaga() {
  // Pre data check
  const currentViews = yield select(selectors.selectViews);
  const currentPokemonId = yield select(PokemonSelectors.selectViewCurrentId);

  // Data is in store, return
  if (currentPokemonId in currentViews) return;

  // Process data
  const state = yield select();
  const pokemonImageList = yield select(AppSelectors.selectPokemonImageOptions);
  const currentPokemonDetail = yield call(services.RetrievePokemonDetails, state, currentPokemonId, pokemonImageList);

  // Store data
  yield put(
    actions.updateViews({
      id: currentPokemonId,
      value: currentPokemonDetail
    })
  );
}

export default [
  takeLeading([actions.onInit], updateSharedSaga),
  takeLeading([PokemonActions.initView, PokemonActions.updateCurrentViewId], updateViewsSaga)
];
