import { createSlice } from "@reduxjs/toolkit";
import state from "./state";
import type { AppTypes, DatabaseTypes } from "Core/types";

// Name of slice
const name = "Database";

// Slice initial state
const initialState: DatabaseTypes.State.IState = state;

// Slice
const { reducer } = createSlice<DatabaseTypes.State.IState, DatabaseTypes.Redux.IActions>({
  name,
  initialState,
  reducers: {}
});

// Selectors
const selectors = {
  selectPokemon: (state: AppTypes.Root.IRootState) => state.DATABASE.pokemon
};

export { initialState, reducer, selectors, name };
