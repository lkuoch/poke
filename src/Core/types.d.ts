export type { default as IApp } from "Containers/App/types";
export type { default as IDatabase } from "Database/types";
export type { default as ICustomMiddleware } from "Middlewares/types";

export type { default as IPokemon } from "Containers/Pokemon/types";

import { name as AppName } from "Containers/App/reducer";
import { name as PokemonName } from "Containers/Pokemon/reducer";
import { name as DatabaseName } from "Database/reducer";
export interface IRootState {
  CONTEXT: {
    [AppName]: IState;
    [PokemonName]: IPokemon.IState;
  };
  [DatabaseName]: IDatabase.IState;
}
