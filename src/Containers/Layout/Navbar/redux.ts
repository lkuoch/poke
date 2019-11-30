import robodux from "robodux";
import { Mode } from "./models";
import { App, Navbar } from "@App/types";

// Name of slice
const sliceName = "NAVBAR";

// Slice initial state
const initialState: Navbar.State.IState = {
  mode: Mode.Inline
};

// Actions and reducers
const { actions, reducer } = robodux<Navbar.State.IState, Navbar.Redux.IActions>({
  name: sliceName,
  initialState,
  reducts: {
    updateMode: (state, payload) => {
      state.mode = payload;
    }
  }
});

// Selectors
const selectors = {
  selectMode: (state: App.State.IRootState) => state[sliceName].mode
};

export { initialState, actions, reducer, selectors, sliceName };
