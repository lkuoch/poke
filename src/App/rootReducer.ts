import { combineReducers } from "redux";

//* App
import { reducer as App } from "@Containers/App/redux";

//* Content
import { reducer as Pokemon } from "@Containers/Content/Pokemon/redux";

//* Layout
import { reducer as Navbar } from "@Containers/Layout/Navbar/redux";

export default combineReducers({
  App,
  Pokemon,
  Navbar,
});
