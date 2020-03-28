import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "./models";
import type { App } from "__Types__";

// Name of slice
const name = "APP";

// Slice initial state
const initialState: App.State.IState = {
  pokeAppConfig: null,
  theme: Theme.Light
};

// Slice
const { actions, reducer } = createSlice<App.State.IState, App.Redux.IActions>({
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
  selectPokeConfig: (state: App.State.IRootState) => state[name].pokeAppConfig,
  selectTheme: (state: App.State.IRootState) => state[name].theme
};

export { initialState, actions, reducer, selectors, name };
