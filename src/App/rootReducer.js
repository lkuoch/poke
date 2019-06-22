import { combineReducers } from "redux-immutable";

//* App
import AppReducer from "Containers/App/reducer";

//* Layout
import SideNavBarReducer from "Containers/Layout/Navigation/SideNavbar/reducer";

export default combineReducers({
  App: AppReducer,
  SideNavbar: SideNavBarReducer
});
