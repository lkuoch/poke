import { RetrieveIndexes } from "Services/dataService";
import { BasePath, PokemonImageOptions } from "./entities";
import type { IApp, IDatabase, IPokemonPanel, IService } from "Core/types"; 

export function RetrieveSharedDetails(state: IApp.Root.IRootState): IPokemonPanel.State.IState["shared"] {
  const pokemonVersions = state.DATABASE.versions.identifier;
  const statList = state.DATABASE.stats.identifier;
  const typeList = state.DATABASE.types.identifier;

  return {
    pokemonVersions,
    statList,
    typeList
  };
}

export function RetrievePokemonDetails(
  state: IApp.Root.IRootState,
  currentPokemonId: string,
  pokemonImageList: Array<string>
): IPokemonPanel.State.IState["views"]["value"] {
  // Pokemon
  const pokemon = RetrieveIndexes<IService.Util.SimpleFlatten<IDatabase.Schema.pokemon>>(
    state.DATABASE.pokemon,
    (x) => x[currentPokemonId]
  );
  const pokemonGameIndices = state.DATABASE.pokemon_game_indices[currentPokemonId];

  // Species
  const pokemonSpecies = RetrieveIndexes<IService.Util.SimpleFlatten<IDatabase.Schema.pokemon_species>>(
    state.DATABASE.pokemon_species,
    (x) => x[currentPokemonId]
  );
  const pokemonColor = RetrieveIndexes<IService.Util.SimpleFlatten<IDatabase.Schema.pokemon_colors>>(
    state.DATABASE.pokemon_colors,
    (x) => x[pokemonSpecies.color_id.toString()]
  );
  const pokemonShape = RetrieveIndexes<IService.Util.SimpleFlatten<IDatabase.Schema.pokemon_shapes>>(
    state.DATABASE.pokemon_shapes,
    (x) => x[Number.parseInt(pokemonSpecies.shape_id.toString())]
  );
  const pokemonHabitat = RetrieveIndexes<IService.Util.SimpleFlatten<IDatabase.Schema.pokemon_habitats>>(
    state.DATABASE.pokemon_habitats,
    (x) => x[pokemonSpecies.habitat_id.toString()]
  ).identifier;

  // Abilities
  const pokemonAbilities = state.DATABASE.pokemon_abilities[currentPokemonId];
  const abilities = RetrieveIndexes<IService.Util.SimpleFlatten<IDatabase.Schema.abilities>>(
    state.DATABASE.abilities,
    (x) => pokemonAbilities.map((y) => x[y.ability_id])
  );

  // Stats
  const pokemonStats = state.DATABASE.pokemon_stats[currentPokemonId];

  // Types
  const pokemonTypes = state.DATABASE.pokemon_types[currentPokemonId];

  // Moves
  const pokemonMoves = RetrievePokemonMove(currentPokemonId)[currentPokemonId];
  const moveList = RetrieveIndexes<IService.Util.SimpleFlattenWithArray<IDatabase.Schema.moves>>(
    state.DATABASE.moves,
    (x) => pokemonMoves.map((y) => x[y.move_id])
  );

  // Image links
  const imageLinks = pokemonImageList.map((p) => `${BasePath}/${PokemonImageOptions[p]}/${currentPokemonId}.png`);

  return {
    pokemon,
    pokemonGameIndices,

    pokemonSpecies,
    pokemonColor,
    pokemonShape,
    pokemonHabitat,

    pokemonAbilities,
    abilities,

    pokemonMoves,
    moveList,

    pokemonStats,

    pokemonTypes,

    imageLinks
  };
}

export function RetrievePokemonMove(pokemon_id: string): IDatabase.Schema.pokemon_moves {
  return require(`Database/Data/pokemon_moves/${pokemon_id}.json`);
}
