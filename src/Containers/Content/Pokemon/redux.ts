import robodux from "robodux";
import { IPokemon, IApp } from "@Types";

// Name of slice
const sliceName = "POKEMON";

// Slice initial state
const initialState: IPokemon.IState = {
  pokemon: null
};

const { actions, reducer } = robodux<IPokemon.IState, IPokemon.IActions, IApp.IRootState>({
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
      state.pokemon = payload;
    }
  }
});

// Selectors
const selectors = {
  selectPokemon: (state: IApp.IRootState) => state[sliceName].pokemon
};

export { initialState, actions, reducer, selectors };
