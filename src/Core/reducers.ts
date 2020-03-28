import { combineReducers } from "redux";

//* App
import { reducer as AppReducer } from "@Containers/App/reducer";

//* Content
import { reducer as PokemonReducer } from "@Containers/Content/Pokemon/reducer";

//* Layout
import { reducer as NavbarReducer } from "@Containers/Layout/Navbar/reducer";

export default combineReducers({
  APP: AppReducer,
  POKEMON: PokemonReducer,
  NAVBAR: NavbarReducer,
});
