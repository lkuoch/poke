import { createSlice } from "@reduxjs/toolkit";
import state from "./state";
import type { IDatabase } from "Core/types";

// Name of slice
const name = "DATABASE";

// Slice initial state
const initialState: IDatabase.IState = state;

// Slice
const { reducer } = createSlice<IDatabase.IState, IDatabase.IActions>({
  name,
  initialState,
  reducers: {}
});

export { initialState, reducer, name };
