import { combineReducers } from "redux";

import { reducer as AppReducer, name as AppName } from "Containers/App/reducer";
import { reducer as PokemonReducer, name as PokemonName } from "Containers/Pokemon/reducer";
import { reducer as DatabaseReducer, name as DatabaseName } from "Database/reducer";

export default combineReducers({
  CONTEXT: combineReducers({
    [AppName]: AppReducer,
    [PokemonName]: PokemonReducer
  }),

  [DatabaseName]: DatabaseReducer
});
