import { RSAA, RSAAAction } from "redux-api-middleware";
import { actions } from "./redux";
import { Pokemon } from "__Types__";

export const createFetchPokemonAction = (endpoint: string): RSAAAction => {
  return {
    [RSAA]: {
      endpoint: endpoint,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      types: [
        actions.fetchPokemonRequest.toString(),
        actions.fetchPokemonRequestSuccess.toString(),
        actions.fetchPokemonRequestFailure.toString()
      ]
    }
  };
};

export const retrieveNextPokemonLink = (
  payload: any
): Pokemon.Services.IRetrieveNextPokemonLink => {
  if (payload?.next) {
    return {
      hasNextLink: true,
      nextLink: payload.next
    };
  }

  return {
    hasNextLink: false,
    nextLink: null
  };
};
