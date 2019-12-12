import robodux from "robodux";
import { App, Pokemon } from "@App/types";

// Name of slice
const sliceName = "POKEMON";

// Slice initial state
const initialState: Pokemon.State.IState = {
  meta: {
    // How many slices we should fetch at a time
    pagesToFetch: 5,

    // How many times we should attempt each slice
    retryAttempts: 3
  },

  // List of pokemon
  pokemon: []
};

const { actions, reducer } = robodux<Pokemon.State.IState, Pokemon.Redux.IActions>({
  name: sliceName,
  initialState,
  reducts: {
    // API
    fetchPokemon: (state) => state,

    // Add single pokemon
    addPokemon: (state, payload) => {
      state.pokemon.push(payload);
      return state;
    },

    // Update pokemon
    updatePokemon: (state, payload) => {
      state.pokemon = payload;
    }
  }
});

// Selectors
const selectors = {
  selectMeta: (state: App.State.IRootState) => state[sliceName].meta,
  selectPokemon: (state: App.State.IRootState) => state[sliceName].pokemon
};

export { initialState, actions, reducer, selectors, sliceName };
