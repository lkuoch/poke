import { Theme as IAppTheme } from "@Containers/App/models";
import { PokeAppConfig, Navbar, Pokemon } from "__Types__";

export namespace App {
  export namespace Services {}

  export namespace Models {}

  export namespace State {
    export interface IRootState {
      APP: App.State.IState;
      NAVBAR: Navbar.State.IState;
      POKEMON: Pokemon.State.IState;
    }

    export interface IState {
      pokeAppConfig: PokeAppConfig.Models.IConfig;
      theme: IAppTheme;
    }

    export interface IMappedState extends IState {}
  }

  export namespace Redux {
    export interface IActions {
      updatePokeAppConfig: PokeAppConfig.Models.IConfig;
      updateTheme: IAppTheme;
    }

    export interface IDispatch {
      updateTheme: (payload: IAppTheme) => void;
    }

    export interface IMappedDispatch extends IDispatch {}

    export type IMappedProps = App.State.IMappedState & IMappedDispatch;
  }
}
