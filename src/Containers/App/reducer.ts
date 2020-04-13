import { createSlice } from "@reduxjs/toolkit";
import type { AppTypes } from "Core/types";

// Name of slice
const name = "APP";

// Slice initial state
const initialState: AppTypes.State.IState = {
  pokeAppConfig: null,
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
  selectPokeConfig: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].pokeAppConfig
};

export { initialState, actions, reducer, selectors, name };
