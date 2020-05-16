import { createSlice } from "@reduxjs/toolkit";
import type { IApp, IPokemon } from "Core/types";

// Name of slice
const name = "POKEMON";

// Slice initial state
const initialState: IPokemon.State.IState = {
  view: {
    ids: [],
    currentId: "1"
  },

  meta: {
    hasLoaded: false
  }
};

// Slice
const { actions, reducer } = createSlice<
  IPokemon.State.IState,
  IPokemon.Redux.ISliceReducers
>({
  name,
  initialState,
  reducers: {
    // When pokemon component loads, calculate view
    initView: (state) => state,

    updateView: (state, { payload }) => {
      state.view.ids = payload;
      state.view.currentId = payload[0];
      state.meta.hasLoaded = true;
    },

    updateCurrentViewId: (state, { payload }) => {
      state.view.currentId = payload;
    }
  }
});

// Selectors
const selectors = {
  selectMeta: (state: IApp.Root.IRootState) => state.CONTEXT[name].meta,
  selectView: (state: IApp.Root.IRootState) => state.CONTEXT[name].view,
  selectViewCurrentId: (state: IApp.Root.IRootState) => state.CONTEXT[name].view.currentId,
  selectPokemon: (state: IApp.Root.IRootState) => state.DATABASE.pokemon
};

export { initialState, actions, reducer, selectors, name };
