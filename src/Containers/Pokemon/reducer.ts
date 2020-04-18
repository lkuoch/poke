import { createSlice } from "@reduxjs/toolkit";
import type { AppTypes, PokemonTypes } from "Core/types";

// Name of slice
const name = "POKEMON";

// Slice initial state
const initialState: PokemonTypes.State.IState = {
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
  PokemonTypes.State.IState,
  PokemonTypes.Redux.ISliceReducers
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
  selectMeta: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].meta,
  selectView: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].view,
  selectViewCurrentId: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].view.currentId,
  selectPokemon: (state: AppTypes.Root.IRootState) => state.DATABASE.pokemon
};

export { initialState, actions, reducer, selectors, name };
