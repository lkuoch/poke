import createSagaMiddleWare from "redux-saga";
import { applyMiddleware, createStore, Middleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
import rootSagas from "./sagas";

// Global store component
const getEnhancers = (middleWares: Array<Middleware>) => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(...middleWares);
  }

  // Use redux devtools in development environment
  return composeWithDevTools(applyMiddleware(...middleWares));
};

export default function configureStore(initialState = {}) {
  const sagaMiddleWare = createSagaMiddleWare();

  // Init middlewares
  const middleWares = [apiMiddleware, sagaMiddleWare];

  // Link enhancers depending on environment
  const enhancers = getEnhancers(middleWares);

  // Init store
  const store = createStore(rootReducers, initialState, enhancers);

  // Run sagas
  sagaMiddleWare.run(rootSagas);

  return store;
}