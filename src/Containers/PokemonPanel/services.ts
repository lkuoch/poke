import { ObjectMapper, ImageIsAvailable } from "Services/dataService";
import { BasePath, PokemonImageOptions } from "./entities";
import type { AppTypes, DatabaseTypes, PokemonPanelTypes } from "Core/types";

export function RetrievePokemonDetails(
  state: AppTypes.Root.IRootState,
  currentPokemonId: string,
  pokemonImageList: Array<string>
): PokemonPanelTypes.State.IState["views"]["value"] {
  // Pokemon
  const pokemon = ObjectMapper<DatabaseTypes.Schema.pokemon>(state.DATABASE.pokemon, (x) => x[currentPokemonId]);
  const pokemonGameIndices = state.DATABASE.pokemon_game_indices[currentPokemonId];
  const pokemonVersions = state.DATABASE.versions.identifier;

  // Species
  const pokemonSpecies = ObjectMapper<DatabaseTypes.Schema.pokemon_species>(
    state.DATABASE.pokemon_species,
    (x) => x[currentPokemonId]
  );
  const pokemonColor = ObjectMapper<DatabaseTypes.Schema.pokemon_colors>(
    state.DATABASE.pokemon_colors,
    (x) => x[pokemonSpecies.color_id.toString()]
  );
  const pokemonShape = ObjectMapper<DatabaseTypes.Schema.pokemon_shapes>(
    state.DATABASE.pokemon_shapes,
    (x) => x[Number.parseInt(pokemonSpecies.shape_id.toString())]
  );
  const pokemonHabitat = ObjectMapper<DatabaseTypes.Schema.pokemon_habitats>(
    state.DATABASE.pokemon_habitats,
    (x) => x[pokemonSpecies.habitat_id.toString()]
  ).identifier;

  // Abilities
  const pokemonAbilities = state.DATABASE.pokemon_abilities[currentPokemonId];
  const abilities = ObjectMapper<DatabaseTypes.Schema.abilities>(state.DATABASE.abilities, (x) =>
    pokemonAbilities.map((y) => x[y.ability_id])
  );

  // Stats
  const pokemonStats = state.DATABASE.pokemon_stats[currentPokemonId];
  const statList = state.DATABASE.stats.identifier;

  // Types
  const pokemonTypes = state.DATABASE.pokemon_types[currentPokemonId];
  const typeList = state.DATABASE.types.identifier;

  // Moves
  const pokemonMoves = RetrievePokemonMove(currentPokemonId)[currentPokemonId];
  const moveList = ObjectMapper<DatabaseTypes.Schema.moves>(state.DATABASE.moves, (x) =>
    pokemonMoves.map((y) => x[y.move_id])
  );

  // Image links
  const imageLinks = pokemonImageList.map((p) => `${BasePath}/${PokemonImageOptions[p]}/${currentPokemonId}.png`);

  return {
    pokemon,
    pokemonGameIndices,
    pokemonVersions,

    pokemonSpecies,
    pokemonColor,
    pokemonShape,
    pokemonHabitat,

    pokemonAbilities,
    abilities,

    pokemonMoves,
    moveList,

    pokemonStats,
    statList,

    pokemonTypes,
    typeList,

    imageLinks
  };
}

export function RetrievePokemonMove(pokemon_id: string): DatabaseTypes.Schema.pokemon_moves {
  return require(`Database/Data/pokemon_moves/${pokemon_id}.json`);
}
