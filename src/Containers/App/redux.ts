import robodux from "robodux";
import { Theme } from "./models";
import { App } from "__Types__";

// Name of slice
const sliceName = "APP";

// Slice initial state
const initialState: App.State.IState = {
  pokeAppConfig: null,
  theme: Theme.Light
};

// Actions and reducers
const { actions, reducer } = robodux<App.State.IState, App.Redux.IActions, App.State.IRootState>({
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
  selectPokeConfig: (state: App.State.IRootState) => state[sliceName].pokeAppConfig,
  selectTheme: (state: App.State.IRootState) => state[sliceName].theme
};

export { initialState, actions, reducer, selectors };
