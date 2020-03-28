import { createSlice } from "@reduxjs/toolkit";
import { Mode } from "./models";
import { App, Navbar } from "__Types__";

// Name of slice
const name = "NAVBAR";

// Slice initial state
const initialState: Navbar.State.IState = {
  mode: Mode.Inline
};

// Slice
const { actions, reducer } = createSlice<Navbar.State.IState, Navbar.Redux.IActions>({
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
  selectMode: (state: App.State.IRootState) => state[name].mode
};

export { initialState, actions, reducer, selectors, name };
