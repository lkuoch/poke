import { RSAA, RSAAAction, getJSON } from "redux-api-middleware";
import { actions } from "./redux";

export const createFetchPokemonAction = (endpoint: string): RSAAAction => {
  return {
    [RSAA]: {
      endpoint: endpoint,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      types: [
        actions.fetchPokemonRequest.toString(),
        actions.fetchPokemonRequestSuccess.toString(),
        actions.fetchPokemonRequestFailure.toString()
      ]
    }
  };
};
