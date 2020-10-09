import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { IDatabase } from "Core/types";

export interface IState {
  currentID: ?number;
  tableFields: [string, ...string[]];
  tableFieldAliases?: {
    [k]: string;
  };
}

export interface IMappedState extends IState {
  ids: IDatabase.IIDState["pokemon_ids"];
  pokemon: IDatabase.Schema.pokemon;
}

export interface IActions {}

export interface ISliceReducers extends SliceCaseReducers<IState> {}

export interface IMappedDispatch {}

export type IMappedProps = IMappedState;
