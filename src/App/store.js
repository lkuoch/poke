import createSagaMiddleWare from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { fromJS } from "immutable";
import rootReducers from "./rootReducer";
import rootSagas from "./rootSagas";

// Global store component
const getEnhancers = middleWares => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(...middleWares);
  }

  // Redux devtools config
  const devToolsConfig = {
    actionsBlacklist: []
  };

  return composeWithDevTools(devToolsConfig)(applyMiddleware(...middleWares));
};

export default function configureStore(initialState = fromJS({})) {
  const sagaMiddleWare = createSagaMiddleWare();

  // Init middlewares
  const middleWares = [sagaMiddleWare];

  // Link enhancers depending on environment
  const enhancers = getEnhancers(middleWares);

  // Init store
  const store = createStore(rootReducers, initialState, enhancers);

  // Run sagas
  sagaMiddleWare.run(rootSagas, store.dispatch);

  return store;
}
