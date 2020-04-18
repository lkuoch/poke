import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { AppTypes, DatabaseTypes } from "Core/types";

export namespace State {
  export interface IState {}

  export interface IMappedState extends Partial<IState> {}
}

export namespace Redux {
  export interface IActions extends SliceCaseReducers<State.IState> {}

  export interface IDispatch {}

  export interface IMappedDispatch extends Partial<IDispatch> {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}

export namespace Selectors {
  export interface IPokemonDetails {
    pokemon?: DatabaseTypes.Schema.pokemon;
    pokemonGameIndices?: DatabaseTypes.Schema.pokemon_game_indices["pokemonGameIndices"];
    pokemonVersions?: DatabaseTypes.Schema.versions["identifier"];

    pokemonSpecies?: DatabaseTypes.Schema.pokemon_species;
    pokemonColor?: DatabaseTypes.Schema.pokemon_colors;
    pokemonShape?: DatabaseTypes.Schema.pokemon_shapes;
    pokemonHabitat?: DatabaseTypes.Schema.pokemon_habitats["identifier"];

    pokemonAbilities?: DatabaseTypes.Schema.pokemon_abilities["pokemon_abilities"];
    abilities?: DatabaseTypes.Schema.abilities;

    pokemonMoves?: DatabaseTypes.Schema.pokemon_moves["pokemon_moves"];
    moveList?: DatabaseTypes.Schema.moves;

    pokemonStats?: DatabaseTypes.Schema.pokemon_stats["pokemon_stats"];
    statList?: DatabaseTypes.Schema.stats["identifier"];

    pokemonTypes?: DatabaseTypes.Schema.pokemon_types["pokemon_types"];
    typeList?: DatabaseTypes.Schema.types["identifier"];
  }
}
