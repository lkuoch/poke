import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "./models";
import type { AppTypes } from "Core/types";

// Name of slice
const name = "APP";

// Slice initial state
const initialState: AppTypes.State.IState = {
  pokeAppConfig: null,
  theme: Theme.Light
};

// Slice
const { actions, reducer } = createSlice<AppTypes.State.IState, AppTypes.Redux.IActions>({
  name,
  initialState,
  reducers: {
    // Update config
    updatePokeAppConfig: (state, { payload }) => {
      state.pokeAppConfig = payload;
    },

    // Update app theme
    updateTheme: (state, { payload }) => {
      state.theme = payload;
    }
  }
});

// Selectors
const selectors = {
  selectPokeConfig: (state: AppTypes.State.IRootState) => state.CONTEXT[name].pokeAppConfig,
  selectTheme: (state: AppTypes.State.IRootState) => state.CONTEXT[name].theme
};

export { initialState, actions, reducer, selectors, name };
