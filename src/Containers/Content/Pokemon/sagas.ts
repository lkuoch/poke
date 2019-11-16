import { select, put, take, call, fork, takeLeading, retry } from "redux-saga/effects";
import { selectors as appSelectors } from "@Containers/App/redux";
import { actions, selectors } from "./redux";
import * as services from "./services";
import { AppConfig, Pokemon } from "@App/types";

function* fetchPokemonSaga() {
  // Get endpoint from config
  const {
    endpoints: { testPokemon }
  }: AppConfig.Models.IConfig = yield select(appSelectors.selectPokeConfig);

  // Get fetchMeta
  const fetchMeta = yield select(selectors.selectFetchMeta);
  yield fork(fetchNextPokemon, testPokemon, fetchMeta);
}

function* fetchNextPokemon(fetchEndpoint: string, _fetchMeta: Pokemon.State.IFetchMeta) {
  // Reassign `_fetchMeta` so we can mutate it
  const fetchMeta = Object.assign({}, _fetchMeta);

  // Stop fetching after we hit out limit
  if (fetchMeta.pagesToFetch === 0) return;

  // Dispatch API middleware action
  yield put<any>(services.createFetchPokemonAction(fetchEndpoint));

  // Wait for result
  const { type: fetchPokemonResultType, payload: fetchPokemonResult } = yield take([
    actions.fetchPokemonRequestSuccess,
    actions.fetchPokemonRequestFailure
  ]);

  // Scenario 1: Network request failed -> Try until we have no more retry attempts left
  if (fetchPokemonResultType === actions.fetchPokemonRequestFailure) {
    if (fetchMeta.retryAttempts > 0) {
      console.log(`Retry attempt #${fetchMeta.retryAttempts} fetching from ${fetchEndpoint} again`);

      fetchMeta.retryAttempts -= 1;
      return fetchNextPokemon(fetchEndpoint, fetchMeta);
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
    fetchMeta.pagesToFetch -= 1;
    return yield fork(fetchNextPokemon, nextLink, fetchMeta);
  }
}

export default [takeLeading(actions.fetchPokemon, fetchPokemonSaga)];
