import { put, take, fork, takeLatest, select } from "redux-saga/effects";
import { actions } from "./redux";

export function* initSaga() {
  yield put(actions.fetchPokemon());
}

function* fetchPokemonSaga(action) {
  console.log("Hello there general!!", action);

}

export default [takeLatest(actions.fetchPokemon, fetchPokemonSaga)];