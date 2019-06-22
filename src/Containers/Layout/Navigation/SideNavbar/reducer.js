import { fromJS } from "immutable";
import { createReducer } from "redux-starter-kit";
import * as sideNavbar from "./actions";

export const initialState = fromJS({
  mode: "inline"
});

export default createReducer(initialState, {
  [sideNavbar.changeMode]: (state, action) => {
    return state;
  }
});
