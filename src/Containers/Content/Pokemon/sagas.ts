import { select, put, take, call, fork, takeLeading } from "redux-saga/effects";
import { actions as appActions, selectors as appSelectors } from "@Containers/App/redux";
import { actions, selectors } from "./redux";
import * as services from "./services";
import { PokeAppConfig, Pokemon } from "__Types__";

function* fetchPokemonSaga() {
  // Get endpoint from config
  const {
    endpoints: { testPokemon }
  }: PokeAppConfig.Models.IConfig = yield select(appSelectors.selectPokeConfig);
  // const {}  = yield select(selectors.selectFetchMeta);

  yield fork(fetchNextPokemon, testPokemon, 3);
}

function* fetchNextPokemon(fetchEndpoint: string, retryAttempts: number) {
  // Dispatch API middleware action
  yield put<any>(services.createFetchPokemonAction(fetchEndpoint));

  // Wait for result
  const { type: fetchPokemonResultType, payload: fetchPokemonResult } = yield take([
    actions.fetchPokemonRequestSuccess,
    actions.fetchPokemonRequestFailure
  ]);

  // Scenario 1: Network request failed -> Try until we have no more retry attempts left
  if (fetchPokemonResultType === actions.fetchPokemonRequestFailure) {
    if (retryAttempts > 0) {
      console.log(`Retry attempt #${retryAttempts} fetching from ${fetchEndpoint} again`);

      return fetchNextPokemon(fetchEndpoint, (retryAttempts -= 1));
    } else {
      // Can't retrieve the object which means we can't get the next pokemon
      // Dispatch some kind of error?
      console.error("Something terribly went wrong");
    }
  }

  // Scenario 2: Fetched Pokemon; update it in the store
  yield put(actions.updatePokemon(fetchPokemonResult));

  // Get the next pokemon link
  const { hasNextLink, nextLink }: Pokemon.Services.IRetrieveNextPokemonLink = yield call(
    services.retrieveNextPokemonLink,
    fetchPokemonResult
  );

  // Call the saga again until we don't have anymore links
  if (hasNextLink) {
    return yield fork(fetchNextPokemon, nextLink, retryAttempts);
  }
}

export default [takeLeading(actions.fetchPokemon, fetchPokemonSaga)];
