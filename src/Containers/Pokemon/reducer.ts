import { createSlice } from "@reduxjs/toolkit";

import type { IRootState, IPokemon } from "Core/types";

const name = "POKEMON";
const initialState: IPokemon.IState = {
  currentID: null,
  tableFields: ["identifier", "height", "weight", "base_experience"],
  tableFieldAliases: {
    identifier: "Name",
    height: "Height",
    weight: "Weight",
    base_experience: "Base XP"
  }
};

const { actions, reducer } = createSlice<IPokemon.IState, IPokemon.ISliceReducers>({
  name,
  initialState,
  reducers: {}
});

// Selectors
const selectors = {
  selectCurrentId: (state: IRootState) => state.CONTEXT[name].currentID,
  selectTableFields: (state: IRootState) => state.CONTEXT[name].tableFields,
  selectTableFieldAliases: (state: IRootState) => state.CONTEXT[name].tableFieldAliases,

  selectPokemonIds: (state: IRootState) => state.DATABASE.ids.pokemon_ids,
  selectPokemonList: (state: IRootState) => state.DATABASE["pokemon"],
};

export { initialState, actions, reducer, selectors, name };
