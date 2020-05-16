import { createSlice } from "@reduxjs/toolkit";
import state from "./state";
import type { IDatabase } from "Core/types";

// Name of slice
const name = "DATABASE";

// Slice initial state
const initialState: IDatabase.State.IState = state;

// Slice
const { reducer } = createSlice<IDatabase.State.IState, IDatabase.Redux.IActions>({
  name,
  initialState,
  reducers: {}
});

export { initialState, reducer, name };
