import { combineReducers } from "redux";

//* App
import { reducer as AppReducer, name as AppName } from "Containers/App/reducer";

//* Database
import { reducer as DatabaseReducer, name as DatabaseName } from "Database/reducer";

//* Content
import { reducer as PokemonReducer, name as PokemonName } from "Containers/Pokemon/reducer";
import {
  reducer as PokemonPanelReducer,
  name as PokemonPanelName
} from "Containers/PokemonPanel/reducer";

//* Layout
import { reducer as NavbarReducer, name as NavbarName } from "Containers/Navbar/reducer";

export default combineReducers({
  CONTEXT: combineReducers({
    [AppName]: AppReducer,
    [NavbarName]: NavbarReducer,
    [PokemonName]: PokemonReducer,
    [PokemonPanelName]: PokemonPanelReducer
  }),

  [DatabaseName]: DatabaseReducer
});
