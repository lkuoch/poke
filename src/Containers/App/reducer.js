import { fromJS } from "immutable";
import { createReducer } from "redux-starter-kit";
import * as app from "./actions";

export const initialState = fromJS({
  theme: "light"
});

export default createReducer(initialState, {
  [app.updateTheme]: (state, action) => {
    console.log("REDUCER", action);
    return state;
  }
});
