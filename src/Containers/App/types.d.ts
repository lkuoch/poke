import { Theme as IAppTheme } from "Containers/App/models";
import type { AppConfigTypes, DatabaseTypes, NavbarTypes, PokemonTypes } from "Core/types";
import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export namespace Services {}

export namespace Models {}

export namespace State {
  export interface IRootState {
    CONTEXT: IRootAppState;
    DATABASE: DatabaseTypes;
  }

  export interface IRootAppState {
    CONTEXT: State.IState;
    NAVBAR: NavbarTypes.State.IState;
    POKEMON: PokemonTypes.State.IState;
  }

  export interface IState {
    pokeAppConfig: AppConfigTypes.Models.IConfig | null;
    theme: IAppTheme;
  }

  export interface IMappedState extends Partial<IState> {}
}

export namespace Redux {
  export interface IActions extends SliceCaseReducers<State.IState> {
    updatePokeAppConfig: CaseReducer<State.IState, PayloadAction<AppConfigTypes.Models.IConfig>>;
    updateTheme: CaseReducer<State.IState, PayloadAction<IAppTheme>>;
  }

  export interface IDispatch {
    updateTheme: (payload: IAppTheme) => void;
  }

  export interface IMappedDispatch extends Partial<IDispatch> {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
