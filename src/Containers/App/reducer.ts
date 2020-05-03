import { createSlice } from "@reduxjs/toolkit";
import { RetrieveEnumKeyValues } from "Services/dataService";
import { PokemonImageOptions } from "Containers/PokemonPanel/entities";

import type { AppTypes } from "Core/types";

// Name of slice
const name = "APP";

// Slice initial state
const initialState: AppTypes.State.IState = {
  pokeAppConfig: null,

  pokemonImageOptions: RetrieveEnumKeyValues(PokemonImageOptions)
};

// Slice
const { actions, reducer } = createSlice<AppTypes.State.IState, AppTypes.Redux.IActions>({
  name,
  initialState,
  reducers: {
    // Update config
    updatePokeAppConfig: (state, { payload }) => {
      state.pokeAppConfig = payload;
    }
  }
});

// Selectors
const selectors = {
  selectPokeConfig: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].pokeAppConfig,
  selectPokemonImageOptions: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].pokemonImageOptions
};

export { initialState, actions, reducer, selectors, name };
