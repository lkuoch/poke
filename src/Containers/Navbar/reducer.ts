import { createSlice } from "@reduxjs/toolkit";
import { NavbarTypes } from "Core/types";

// Name of slice
const name = "NAVBAR";

// Slice initial state
const initialState: NavbarTypes.State.IState = {};

// Slice
const { actions, reducer } = createSlice<NavbarTypes.State.IState, NavbarTypes.Redux.IActions>({
  name,
  initialState,
  reducers: {}
});

// Selectors
const selectors = {};

export { initialState, actions, reducer, selectors, name };
