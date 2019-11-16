import { Mode as INavbarMode } from "@Containers/Layout/Navbar/models";
import { Theme as IAppTheme } from "@Containers/App/models";

export namespace Models {}

export namespace Services {}

export namespace State {
  export interface IState {
    mode: INavbarMode;
  }

  export interface IMappedState extends IState {
    theme: IAppTheme;
  }
}

export namespace Redux {
  export interface IActions {
    updateMode: INavbarMode;
  }

  export interface IDispatch {
    updateMode: (payload: INavbarMode) => void;
  }

  export interface IMappedDispatch extends IDispatch {
    changeTheme: (payload: any) => void;
  }

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
