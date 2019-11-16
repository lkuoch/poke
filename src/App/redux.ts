import { combineReducers } from "redux";

//* App
import { reducer as AppReducer } from "@Containers/App/redux";

//* Content
import { reducer as PokemonReducer } from "@Containers/Content/Pokemon/redux";

//* Layout
import { reducer as NavbarReducer } from "@Containers/Layout/Navbar/redux";

export default combineReducers({
  APP: AppReducer,
  POKEMON: PokemonReducer,
  NAVBAR: NavbarReducer,
});
