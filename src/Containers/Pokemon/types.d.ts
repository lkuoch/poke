import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { IDatabase } from "Core/types";

export namespace Models {}

export namespace Services {}

export namespace State {
  export interface IState {
    // Display pokemon view
    view: {
      ids: Array<string>;
      currentId: string;
    };

    meta: {
      hasLoaded: boolean;
    };
  }

  export interface IMappedState extends State.IState {
    data: {
      pokemon: IDatabase.Schema.pokemon;
    };
  }
}

export namespace Redux {
  export interface IActions {
    initView: PayloadAction<IDatabase.Schema.pokemon.identifier>;
    updateView: PayloadAction<Array<string>>;
    updateCurrentViewId: PayloadAction<string>;
  }

  export interface ISliceReducers extends SliceCaseReducers<State.IState> {
    initView: CaseReducer<State.IState, IActions.initView>;
    updateView: CaseReducer<State.IState, IActions.updateView>;
    updateCurrentViewId: CaseReducer<State.IState, IActions.updateCurrentViewId>;
  }

  export interface IMappedDispatch {
    initView: (payload: IActions["initView"]["payload"]) => void;
    updateCurrentViewId: (payload: IActions["updateCurrentViewId"]["payload"]) => void;
  }

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
