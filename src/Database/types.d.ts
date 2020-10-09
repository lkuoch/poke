import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  ids: IIDState,
  pokemon: Schema.pokemon;
  pokemon_species: Schema.pokemon_species;
}

export interface IIDState {
  pokemon_ids: Array<number>
}

export interface IActions extends SliceCaseReducers<State.IState> {}

export interface IDispatch {}

export interface IMappedDispatch extends Partial<IDispatch> {}

export type IMappedProps = State.IMappedState & IMappedDispatch;

export interface pokemon {
  base_experience: { [key: string]: number };
  height: { [key: string]: number };
  identifier: { [key: string]: string };
  is_default: { [key: string]: number | string };
  order: { [key: string]: number };
  species_id: { [key: string]: number };
  weight: { [key: string]: number };
}

export interface pokemon_species {
  base_happiness: { [key: string]: number };
  capture_rate: { [key: string]: number };
  color_id: { [key: string]: number };
  conquest_order: { [key: string]: number | string };
  evolution_chain_id: { [key: string]: number };
  evolves_from_species_id: { [key: string]: number | string };
  forms_switchable: { [key: string]: number | string };
  gender_rate: { [key: string]: number };
  generation_id: { [key: string]: number };
  growth_rate_id: { [key: string]: number };
  habitat_id: { [key: string]: number | string };
  has_gender_differences: { [key: string]: number | string };
  hatch_counter: { [key: string]: number };
  identifier: { [key: string]: string };
  is_baby: { [key: string]: number | string };
  order: { [key: string]: number };
  shape_id: { [key: string]: number };
}
