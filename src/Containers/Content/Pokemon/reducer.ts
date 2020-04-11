import { createSlice } from "@reduxjs/toolkit";
import type { App, Pokemon } from "Core/types";

// Name of slice
const name = "POKEMON";

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

// Slice
const { actions, reducer } = createSlice<Pokemon.State.IState, Pokemon.Redux.IActions>({
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
  selectMeta: (state: App.State.IRootState) => state[name].meta,
  selectPokemon: (state: App.State.IRootState) => state[name].pokemon
};

export { initialState, actions, reducer, selectors, name };
