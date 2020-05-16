import { createSlice } from "@reduxjs/toolkit";
import { RetrieveEnumKeyValues } from "Services/dataService";
import { PokemonImageOptions } from "Containers/PokemonPanel/entities";

import type { IApp } from "Core/types";

// Name of slice
const name = "APP";

// Slice initial state
const initialState: IApp.State.IState = {
  pokeAppConfig: null,

  pokemonImageOptions: RetrieveEnumKeyValues(PokemonImageOptions)
};

// Slice
const { actions, reducer } = createSlice<IApp.State.IState, IApp.Redux.IActions>({
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
  selectPokeConfig: (state: IApp.Root.IRootState) => state.CONTEXT[name].pokeAppConfig,
  selectPokemonImageOptions: (state: IApp.Root.IRootState) => state.CONTEXT[name].pokemonImageOptions
};

export { initialState, actions, reducer, selectors, name };
