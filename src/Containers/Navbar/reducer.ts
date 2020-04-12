import { createSlice } from "@reduxjs/toolkit";
import { Mode } from "./models";
import { AppTypes, NavbarTypes } from "Core/types";

// Name of slice
const name = "NAVBAR";

// Slice initial state
const initialState: NavbarTypes.State.IState = {
  mode: Mode.Inline
};

// Slice
const { actions, reducer } = createSlice<NavbarTypes.State.IState, NavbarTypes.Redux.IActions>({
  name,
  initialState,
  reducers: {
    updateMode: (state, { payload }) => {
      state.mode = payload;
    }
  }
});

// Selectors
const selectors = {
  selectMode: (state: AppTypes.State.IRootState) => state[name].mode
};

export { initialState, actions, reducer, selectors, name };
