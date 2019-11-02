import robodux from "robodux";
import { Mode } from "./models";
import { INavbar, IApp } from "@Types";

// Name of slice
const sliceName = "NAVBAR";

// Slice initial state
const initialState: INavbar.IState = {
  mode: Mode.Inline
};

// Actions and reducers
const { actions, reducer } = robodux<INavbar.IState, INavbar.IActions, IApp.IRootState>({
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
  selectMode: (state: IApp.IRootState) => state[sliceName].mode
};

export { initialState, actions, reducer, selectors };
