import { createSelector } from "reselect";
import { selectors as PokemonSelectors } from "Containers/Pokemon/reducer";
import { ObjectMapper } from "Services/dataService";
import { RetrievePokemonMove } from "Services/pokemonPanelService";
import type { AppTypes, PokemonPanelTypes, DatabaseTypes } from "Core/types";

// Name of slice
const name = "POKEMON_PANEL";

const selectors = {
  // Select all relevant pokemon details for current pokemon id
  selectPokemonDetails: (state: AppTypes.Root.IRootState) =>
    createSelector([PokemonSelectors.selectViewCurrentId], (currentPokemonId) => {
      // Pokemon
      const pokemon = ObjectMapper<DatabaseTypes.Schema.pokemon>(
        state.DATABASE.pokemon,
        (x) => x[currentPokemonId]
      );
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
      const abilities = ObjectMapper<DatabaseTypes.Schema.abilities>(
        state.DATABASE.abilities,
        (x) => pokemonAbilities.map((y) => x[y.ability_id])
      );

      const pokemonStats = state.DATABASE.pokemon_stats[currentPokemonId];
      const statList = state.DATABASE.stats.identifier;

      const pokemonTypes = state.DATABASE.pokemon_types[currentPokemonId];
      const typeList = state.DATABASE.types.identifier;

      const pokemonMoves = RetrievePokemonMove(currentPokemonId)[currentPokemonId];
      const moveList = ObjectMapper<DatabaseTypes.Schema.moves>(state.DATABASE.moves, (x) =>
        pokemonMoves.map((y) => x[y.move_id])
      );

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
        typeList
      } as PokemonPanelTypes.Selectors.IPokemonDetails;
    })(state)
};

export { selectors, name };
