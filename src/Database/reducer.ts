import { createSlice } from "@reduxjs/toolkit";
import state from "./state";
import type { DatabaseTypes } from "Core/types";

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

export { initialState, reducer, name };
