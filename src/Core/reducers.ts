import { combineReducers } from "redux";

//* App
import { reducer as ContextReducer } from "Containers/App/reducer";

//* Database
import { reducer as DatabaseReducer } from "Database/reducer";

//* Content
import { reducer as PokemonReducer } from "Containers/Pokemon/reducer";

//* Layout
import { reducer as NavbarReducer } from "Containers/Navbar/reducer";

export default combineReducers({
  CONTEXT: combineReducers({
    APP: ContextReducer,
    NAVBAR: NavbarReducer,
    POKEMON: PokemonReducer
  }),

  DATABASE: DatabaseReducer
});
