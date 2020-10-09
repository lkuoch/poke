import type { SliceCaseReducers } from "@reduxjs/toolkit";

export interface IState {}

export interface IMappedState extends Partial<IState> {}

export interface IActions extends SliceCaseReducers<State.IState> {}

export interface IDispatch {}

export interface IMappedDispatch extends Partial<IDispatch> {}

export type IMappedProps = State.IMappedState & IMappedDispatch;
