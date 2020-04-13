import type { AppConfigTypes, DatabaseTypes, NavbarTypes, PokemonTypes } from "Core/types";
import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export namespace Root {
  export interface IRootState {
    CONTEXT: IRootAppState;
    DATABASE: DatabaseTypes.State.IState;
  }

  export interface IRootAppState {
    CONTEXT: State.IState;
    NAVBAR: NavbarTypes.State.IState;
    POKEMON: PokemonTypes.State.IState;
  }
}

export namespace State {
  export interface IState {
    pokeAppConfig: AppConfigTypes.Models.IConfig | null;
  }

  export interface IMappedState extends Partial<IState> {}
}

export namespace Redux {
  export interface IActions extends SliceCaseReducers<State.IState> {
    updatePokeAppConfig: CaseReducer<State.IState, PayloadAction<AppConfigTypes.Models.IConfig>>;
  }

  export interface IDispatch {}

  export interface IMappedDispatch extends Partial<IDispatch> {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
