import { Theme as IAppTheme } from "Containers/App/models";
import type { AppConfig, Navbar, Pokemon } from "Core/types";
import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export namespace Services {}

export namespace Models {}

export namespace State {
  export interface IRootState {
    APP: State.IState;
    NAVBAR: Navbar.State.IState;
    POKEMON: Pokemon.State.IState;
  }

  export interface IState {
    pokeAppConfig: AppConfig.Models.IConfig | null;
    theme: IAppTheme;
  }

  export interface IMappedState extends Partial<IState> {}
}

export namespace Redux {
  export interface IActions extends SliceCaseReducers<State.IState> {
    updatePokeAppConfig: CaseReducer<State.IState, PayloadAction<AppConfig.Models.IConfig>>;
    updateTheme: CaseReducer<State.IState, PayloadAction<IAppTheme>>;
  }

  export interface IDispatch {
    updateTheme: (payload: IAppTheme) => void;
  }

  export interface IMappedDispatch extends Partial<IDispatch> {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
