import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectors as PokemonSelectors } from "Containers/Pokemon/reducer";
import type { PokemonPanelTypes, AppTypes } from "Core/types";

// Name of slice
const name = "POKEMON_PANEL";

// Slice initial state
const initialState: PokemonPanelTypes.State.IState = {
  // Each pokemon specific information
  views: {},

  // Information shared across all pokemon
  shared: {},

  // Information about pokemon panel
  meta: {}
};

// Slice
const { actions, reducer } = createSlice<PokemonPanelTypes.State.IState, PokemonPanelTypes.Redux.ISliceReducers>({
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
  selectShared: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].shared,
  selectViews: (state: AppTypes.Root.IRootState) => state.CONTEXT[name].views,
  selectCurrentView: (state: AppTypes.Root.IRootState) =>
    createSelector([PokemonSelectors.selectViewCurrentId, selectors.selectViews], (id, views) => views[id])(state)
};

export { initialState, actions, reducer, selectors, name };
