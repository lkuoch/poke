import { createSlice } from "@reduxjs/toolkit";
import { INavbar } from "Core/types";

// Name of slice
const name = "NAVBAR";

// Slice initial state
const initialState: INavbar.State.IState = {};

// Slice
const { actions, reducer } = createSlice<INavbar.State.IState, INavbar.Redux.IActions>({
  name,
  initialState,
  reducers: {}
});

// Selectors
const selectors = {};

export { initialState, actions, reducer, selectors, name };
