import { createSlice } from "@reduxjs/toolkit";
import type { AppTypes, PokemonTypes } from "Core/types";

// Name of slice
const name = "POKEMON";

// Slice initial state
const initialState: PokemonTypes.State.IState = {
  meta: {
    // How many slices we should fetch at a time
    pagesToFetch: 5,

    // How many times we should attempt each slice
    retryAttempts: 3
  },

  // List of pokemon
  pokemon: []
};

// Slice
const { actions, reducer } = createSlice<PokemonTypes.State.IState, PokemonTypes.Redux.IActions>({
  name,
  initialState,
  reducers: {
    // Add single pokemon
    addPokemon: (state, { payload }) => {
      state.pokemon.push(payload);
    },

    // Update pokemon
    updatePokemon: (state, { payload }) => {
      state.pokemon = payload;
    },

    // API
    fetchPokemon: (state) => state
  }
});

// Selectors
const selectors = {
  selectMeta: (state: AppTypes.State.IRootState) => state.CONTEXT[name].meta,
  selectPokemon: (state: AppTypes.State.IRootState) => state.CONTEXT[name].pokemon
};

export { initialState, actions, reducer, selectors, name };
