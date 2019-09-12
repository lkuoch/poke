import { Store, Dispatch, AnyAction } from "redux";
import { IApi } from "@Types";

export const CALL_API = "CALL_API";

const callApi = (url: string, methods: RequestInit, actionTypes: IApi.IResponses) => {
  return fetch(url, methods).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    })
  );
};

// Export this middleware
export default (store: Store) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  const callAPI = action[CALL_API];

  // Proceed
  if (typeof callAPI === "undefined") {
    return next(action);
  }

  const { url, methods, actionTypes } = callAPI;

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  next(actionWith({ type: actionTypes.requestType }));

  return callApi(url, methods, actionTypes).then(
    (response) =>
      next(
        actionWith({
          response,
          type: actionTypes.successType
        })
      ),
    () =>
      next(
        actionWith({
          type: actionTypes.failureType
        })
      )
  );
};
