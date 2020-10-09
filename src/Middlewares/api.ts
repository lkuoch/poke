import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import { CALL_API_MIDDLEWARE_TYPE } from "./models";
import type { ICustomMiddleware } from "Core/types";

const callApiHandler = async (callAPIPayload: ICustomMiddleware.ICallApiPayload) => {
  const callApi = async (_callAPIPayload: ICustomMiddleware.ICallApiPayload) => {
    const response = await fetch(_callAPIPayload.endpoint, _callAPIPayload.schema);
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

const callAPIMiddleware: Middleware<Dispatch> = ({ dispatch }: MiddlewareAPI) => (next) => (
  action: AnyAction
) => {
  if (action.type !== CALL_API_MIDDLEWARE_TYPE) {
    return next(action);
  }

  const callAPIPayload = (action as ICustomMiddleware.ICallApiAction).payload;
  const [requestType, successType, failureType] = callAPIPayload.types;

  dispatch({
    type: requestType
  });

  return callApiHandler(callAPIPayload).then(
    (response) =>
      dispatch({
        type: successType,
        response
      }),
    (error) =>
      dispatch({
        type: failureType,
        error: error.message || `Error fetching resource with payload: ${callAPIMiddleware}`
      })
  );
};

export default callAPIMiddleware;
