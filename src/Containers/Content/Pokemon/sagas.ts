import { put, take, fork, takeLatest, select } from "redux-saga/effects";
import { actions as appActions, selectors as appSelectors } from "@Containers/App/redux";
import { actions } from "./redux";
import * as services from "./services";
import { IPokeAppConfig } from "@Types";

function* fetchPokemonSaga() {
  // Get endpoint from config
  const { endpoints }: IPokeAppConfig.IConfig = yield select(appSelectors.selectPokeConfig);

  // Dispatch API middleware action
  yield put<any>(services.createFetchPokemonAction(endpoints.testPokemon));

  // Wait for result
  const {type, payload} = yield take([actions.fetchPokemonRequestSuccess, actions.fetchPokemonRequestFailure]);

  // Scenario 1: Network request failed
  if (type.type === actions.fetchPokemonRequestFailure) {
    console.log('Failed to retrieve pokemon');
    return;
  }

  // Scenario 2: Fetched Pokemon; update it in the store
  yield put(actions.updatePokemon(payload));
}

export default [takeLatest(actions.fetchPokemon, fetchPokemonSaga)];
