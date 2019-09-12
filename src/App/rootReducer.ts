import { combineReducers } from "redux";

//* App
import { reducer as App } from "@Containers/App/slice";

//* Content
import { reducer as Pokemon } from "@Containers/Content/Pokemon/slice";

//* Layout
import { reducer as Navbar } from "@Containers/Layout/Navbar/slice";

export default combineReducers({
  App,
  Pokemon,
  Navbar,
});
