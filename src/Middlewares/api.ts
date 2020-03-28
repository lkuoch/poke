import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import { CALL_API_MIDDLEWARE_TYPE } from "./models";
import type { Middlewares } from "__Types__";

// Handle call api
const callApiHandler = async (callAPIPayload: Middlewares.ICallApiPayload) => {
  // Fetches an API response
  const callApi = async (callAPIPayload: Middlewares.ICallApiPayload) => {
    const response = await fetch(callAPIPayload.endpoint, callAPIPayload.schema);
    const data = await response.json();
    return data;
  };

  // If retry is enabled
  if (callAPIPayload?.retryCount) {
    for (let attempts = 0; attempts < callAPIPayload.retryCount; attempts += 1) {
      try {
        return await callApi(callAPIPayload);
      } catch (err) {
        const isLastAttempt = attempts + 1 === callAPIPayload.retryCount;
        if (isLastAttempt) throw err;
      }
    }
  }

  return callApi(callAPIPayload);
};

// Call API middleware
const callAPIMiddleware: Middleware<Dispatch> = ({ dispatch }: MiddlewareAPI) => (next) => (
  action: AnyAction
) => {
  // Don't process if it's not the type we are looking for
  if (action.type !== CALL_API_MIDDLEWARE_TYPE) {
    return next(action);
  }

  // Get body
  const callAPIPayload = (action as Middlewares.ICallApiAction).payload;

  // Get redux types to return
  const [requestType, successType, failureType] = callAPIPayload.types;

  // Dispatch request type
  dispatch({
    type: requestType
  });

  // Begin network requests
  return callApiHandler(callAPIPayload).then(
    (response) =>
      dispatch({
        type: successType,
        response
      }),
    (error) =>
      dispatch({
        type: failureType,
        error: error.message || "Error fetching resource"
      })
  );
};

export default callAPIMiddleware;
