import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectors as PokemonSelectors } from "Containers/Pokemon/reducer";
import type { IPokemonPanel, IApp } from "Core/types";

// Name of slice
const name = "POKEMON_PANEL";

// Slice initial state
const initialState: IPokemonPanel.State.IState = {
  // Each pokemon specific information
  views: {},

  // Information shared across all pokemon
  shared: {},

  // Information about pokemon panel
  meta: {}
};

// Slice
const { actions, reducer } = createSlice<IPokemonPanel.State.IState, IPokemonPanel.Redux.ISliceReducers>({
  name,
  initialState,
  reducers: {
    onInit: (state) => state,

    updateShared: (state, { payload }) => {
      state.shared = payload;
    },

    updateViews: (state, { payload }) => {
      state.views[payload.id] = payload.value;
    }
  }
});

const selectors = {
  selectShared: (state: IApp.Root.IRootState) => state.CONTEXT[name].shared,
  selectViews: (state: IApp.Root.IRootState) => state.CONTEXT[name].views,
  selectCurrentView: (state: IApp.Root.IRootState) =>
    createSelector([PokemonSelectors.selectViewCurrentId, selectors.selectViews], (id, views) => views[id])(state)
};

export { initialState, actions, reducer, selectors, name };
