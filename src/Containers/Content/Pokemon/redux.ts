import robodux from "robodux";
import { IPokemon, IApp } from "@Types";

// Name of slice
const sliceName = "Pokemon";

// Slice initial state
const initialState: IPokemon.IState = {
  pokemon: null
};

const { actions, reducer } = robodux<IPokemon.IState, IPokemon.IActions, IApp.IRootState>({
  name: sliceName,
  initialState,
  reducts: {
    fetchPokemon: (state, payload) => state,
    updatePokemon: (state, payload) => state
  }
});

// Selectors
const selectors = {
  selectPokemon: (state: IApp.IRootState) => state[sliceName].pokemon
};

export { initialState, actions, reducer, selectors };
