import { put } from "redux-saga/effects";
import { actions } from "./reducer";
import type { IAppConfig } from "Core/types";

export function* initSaga() {
  // Select correct config
  const Config =
    String(process.env.NODE_ENV).toLowerCase() === "development"
      ? require("Config/poke.dev.json")
      : require("Config/poke.prod.json");

  // Load config into store
  yield put(actions.updatePokeAppConfig(Config as IAppConfig.Models.IConfig));
}

export default [];
