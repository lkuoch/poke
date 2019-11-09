import robodux from "robodux";
import { App, Pokemon } from "__Types__";

// Name of slice
const sliceName = "POKEMON";

// Slice initial state
const initialState: Pokemon.State.IState = {
  fetchMeta: {
    // How many slices we should fetch at a time
    slices: 5,

    // How many times we should attempt each slice
    retryAttempts: 3
  },

  pokemon: []
};

const { actions, reducer } = robodux<
  Pokemon.State.IState,
  Pokemon.Redux.IActions,
  App.State.IRootState
>({
  name: sliceName,
  initialState,
  reducts: {
    // API
    fetchPokemon: (state) => state,
    fetchPokemonRequest: (state) => state,
    fetchPokemonRequestSuccess: (state) => state,
    fetchPokemonRequestFailure: (state) => state,

    // Update a single pokemon
    updatePokemon: (state, payload) => {
      state.pokemon.push(payload);
      return state;
    }
  }
});

// Selectors
const selectors = {
  selectFetchMeta: (state: App.State.IRootState) => state[sliceName].fetchMeta,
  selectPokemon: (state: App.State.IRootState) => state[sliceName].pokemon
};

export { initialState, actions, reducer, selectors };
