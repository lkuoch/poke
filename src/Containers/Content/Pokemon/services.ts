import { RSAA, RSAAAction } from "redux-api-middleware";
import { FetchPokemonApiResult } from "./models";
import { Pokemon } from "Core/types";

export const createFetchPokemonAction = (endpoint: string): RSAAAction => {
  return {
    [RSAA]: {
      endpoint: endpoint,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      types: [
        FetchPokemonApiResult.REQUEST,
        FetchPokemonApiResult.SUCCESS,
        FetchPokemonApiResult.FAILURE
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
