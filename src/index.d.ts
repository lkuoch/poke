import * as NavbarSlice from "./Containers/Layout/Navbar/redux";
import { Mode as INavbarMode } from "@Containers/Layout/Navbar/models";
import { Theme as IAppTheme } from "@Containers/App/models";

//* App
export namespace IApp {
  export interface IRootState {
    APP: IApp.IState;
    NAVBAR: INavbar.IState;
    POKEMON: IPokemon.IState;
  }

  export interface IState {
    pokeAppConfig: Object;
    theme: IAppTheme;
  }

  export interface IActions {
    updatePokeAppConfig: Object;
    updateTheme: IAppTheme;
  }

  export interface IMappedState extends IState { }

  export interface IDispatch {
    updateTheme: (payload: IAppTheme) => void;
  }

  export interface IMappedDispatch extends IDispatch { }

  export type IMappedProps = IMappedState & IMappedDispatch;
}

//* Containers
export namespace INavbar {
  export interface IState {
    mode: INavbarMode;
  }

  export interface IActions {
    updateMode: INavbarMode;
  }

  export interface IMappedState extends IState {
    theme: IAppTheme;
  }

  export interface IDispatch {
    updateMode: (payload: INavbarMode) => void;
  }

  export interface IMappedDispatch extends IDispatch {
    changeTheme: (payload: any) => void;
  }

  export type IMappedProps = IMappedState & IMappedDispatch;
}

//* Content
export namespace IPokemon {
  export interface IState {
    pokemon: Object;
  }

  export interface IActions {
    fetchPokemon: never;

    // State updates
    updatePokemon: Object;
  }

  export interface IMappedState extends IState {
    pokemon: Object;
  }

  export interface IDispatch {
  }

  export interface IMappedDispatch extends IDispatch {
  }

  export type IMappedProps = IMappedState & IMappedDispatch;
}

//* Generic
export namespace IGeneric {
  export interface IEnumMenuComponentProps {
    SelectedItem: Object;
    Items: Object;
  }
}