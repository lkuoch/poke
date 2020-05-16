import { name as AppName } from "Containers/App/reducer";
import { name as DatabaseName } from "Database/reducer";
import { name as PokemonName } from "Containers/Pokemon/reducer";
import { name as PokemonPanelName } from "Containers/PokemonPanel/reducer";
import { name as NavbarName } from "Containers/Navbar/reducer";
import type {
  IAppConfig,
  IDatabase,
  INavbar,
  IPokemon,
  IPokemonPanel
} from "Core/types";
import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export namespace Root {
  export interface IRootState {
    CONTEXT: {
      [AppName]: State.IState;
      [NavbarName]: INavbar.State.IState;
      [PokemonName]: IPokemon.State.IState;
      [PokemonPanelName]: IPokemonPanel.State.IState;
    };
    [DatabaseName]: IDatabase.State.IState;
  }
}

export namespace State {
  export interface IState {
    pokeAppConfig: IAppConfig.Models.IConfig | null;
    pokemonImageOptions: Array<string>;
  }

  export interface IMappedState extends Partial<IState> {}
}

export namespace Redux {
  export interface IActions extends SliceCaseReducers<State.IState> {
    updatePokeAppConfig: CaseReducer<State.IState, PayloadAction<IAppConfig.Models.IConfig>>;
  }

  export interface IDispatch {}

  export interface IMappedDispatch extends Partial<IDispatch> {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
