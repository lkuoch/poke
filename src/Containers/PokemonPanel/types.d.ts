import type { SliceCaseReducers, CaseReducer, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import type { IApp, IDatabase, IService } from "Core/types";

export namespace State {
  export interface IState {
    views: {
      [key?: string]: {
        pokemon: IService.Util.SimpleFlatten<IDatabase.Schema.pokemon>;
        pokemonGameIndices: IDatabase.Schema.pokemon_game_indices["pokemonGameIndices"];

        pokemonSpecies: IService.Util.SimpleFlatten<IDatabase.Schema.pokemon_species>;
        pokemonColor: IService.Util.SimpleFlatten<IDatabase.Schema.pokemon_colors>;
        pokemonShape: IService.Util.SimpleFlatten<IDatabase.Schema.pokemon_shapes>;
        pokemonHabitat: IDatabase.Schema.pokemon_habitats["identifier"]["key"];

        pokemonAbilities: IDatabase.Schema.pokemon_abilities["pokemon_abilities"];
        abilities: IService.Util.SimpleFlatten<IDatabase.Schema.abilities>;

        pokemonMoves: IDatabase.Schema.pokemon_moves["pokemon_moves"];
        moveList: IService.Util.SimpleFlattenWithArray<IDatabase.Schema.moves>;

        pokemonStats: IDatabase.Schema.pokemon_stats["pokemon_stats"];

        IPokemon: IDatabase.Schema.pokemon_types["pokemon_types"];

        imageLinks: Array<string>;
      };
    };

    shared: {
      pokemonVersions?: IService.Util.SimpleFlatten<IDatabase.Schema.versions["identifier"]>;
      statList?: IDatabase.Schema.stats["identifier"];
      typeList?: IDatabase.Schema.types["identifier"];
    };

    meta: {};
  }

  export interface IMappedState extends Partial<IState> {
    pokemonImageOptions: Array<string>;
    currentPokemonDetails: State.IState["views"]["value"];
    currentPokemonId: string;
  }
}

export namespace Props {
  export interface Gallery {
    imageLinks: Array<string>;
  }
}

export namespace Redux {
  export interface ISliceReducers extends SliceCaseReducers<State.IState> {
    onInit: CaseReducer<State.IState, AnyAction>;

    updateViews: CaseReducer<
      State.IState,
      PayloadAction<{
        id: string;
        value: State.IState["views"]["value"];
      }>
    >;

    updateShared: CaseReducer<State.IState, PayloadAction<any>>;
  }

  export interface IDispatch {
    onInit: () => void;
  }

  export interface IMappedDispatch extends IDispatch {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}

export namespace Selectors {
  export interface IPokemonDetails {
    pokemon: IDatabase.Schema.pokemon;
    pokemonGameIndices: IDatabase.Schema.pokemon_game_indices["pokemonGameIndices"];
    pokemonVersions: IDatabase.Schema.versions["identifier"];

    pokemonSpecies: IDatabase.Schema.pokemon_species;
    pokemonColor: IDatabase.Schema.pokemon_colors;
    pokemonShape: IDatabase.Schema.pokemon_shapes;
    pokemonHabitat: IDatabase.Schema.pokemon_habitats["identifier"];

    pokemonAbilities: IDatabase.Schema.pokemon_abilities["pokemon_abilities"];
    abilities: IDatabase.Schema.abilities;

    pokemonMoves: IDatabase.Schema.pokemon_moves["pokemon_moves"];
    moveList: IDatabase.Schema.moves;

    pokemonStats: IDatabase.Schema.pokemon_stats["pokemon_stats"];
    statList: IDatabase.Schema.stats["identifier"];

    IPokemon: IDatabase.Schema.pokemon_types["pokemon_types"];
    typeList: IDatabase.Schema.types["identifier"];
  }
}
