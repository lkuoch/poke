import { createSlice } from "@reduxjs/toolkit";

import type { IApp } from "Core/types";

const name = "APP";
const initialState: IApp.IState = {};

const { actions, reducer } = createSlice<IApp.IState, IApp.IActions>({
  name,
  initialState,
  reducers: {}
});

// Selectors
const selectors = {};

export { initialState, actions, reducer, selectors, name };
