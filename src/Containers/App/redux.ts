import robodux from "robodux";
import { Theme } from "./models";
import { IApp } from "@Types";

// Name of slice
const sliceName = "App";

// Slice initial state
const initialState: IApp.IState = {
  theme: Theme.Light
};

// Actions and reducers
const { actions, reducer } = robodux<IApp.IState, IApp.IActions, IApp.IRootState>({
  name: sliceName,
  initialState,
  reducts: {
    updateTheme: (state, payload) => {
      state.theme = payload;
    }
  }
});

// Selectors
const selectors = {
  selectTheme: (state: IApp.IRootState) => state[sliceName].theme
};

export { initialState, actions, reducer, selectors };
