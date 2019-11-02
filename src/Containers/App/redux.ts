import robodux from "robodux";
import { Theme } from "./models";
import { IApp } from "@Types";

// Name of slice
const sliceName = "APP";

// Slice initial state
const initialState: IApp.IState = {
  pokeAppConfig: {},
  theme: Theme.Light
};

// Actions and reducers
const { actions, reducer } = robodux<IApp.IState, IApp.IActions, IApp.IRootState>({
  name: sliceName,
  initialState,
  reducts: {
    // Load Poke App Config
    updatePokeAppConfig: (state, payload) => {
      state.pokeAppConfig = payload;
    },

    // Update App theme
    updateTheme: (state, payload) => {
      state.theme = payload;
    }
  }
});

// Selectors
const selectors = {
  selectPokeConfig: (state: IApp.IRootState) => state[sliceName].pokeAppConfig,
  selectTheme: (state: IApp.IRootState) => state[sliceName].theme
};

export { initialState, actions, reducer, selectors };
