import { Theme as IAppTheme } from "@Containers/App/models";
import { AppConfig, Navbar, Pokemon } from "@App/types";

export namespace Services {}

export namespace Models {}

export namespace State {
  export interface IRootState {
    APP: State.IState;
    NAVBAR: Navbar.State.IState;
    POKEMON: Pokemon.State.IState;
  }

  export interface IState {
    pokeAppConfig: AppConfig.Models.IConfig;
    theme: IAppTheme;
  }

  export interface IMappedState extends IState {}
}

export namespace Redux {
  export interface IActions {
    updatePokeAppConfig: AppConfig.Models.IConfig;
    updateTheme: IAppTheme;
  }

  export interface IDispatch {
    updateTheme: (payload: IAppTheme) => void;
  }

  export interface IMappedDispatch extends IDispatch {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
