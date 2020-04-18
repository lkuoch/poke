import { createSelector } from "reselect";
import { selectors as PokemonSelectors } from "Containers/Pokemon/reducer";
import { ObjectMapper } from "Services/dataService";
import type { AppTypes, PokemonPanelTypes } from "Core/types";

// Name of slice
const name = "POKEMON_PANEL";

const selectors = {
  // Select all relevant pokemon details for current pokemon id
  selectPokemonDetails: (state: AppTypes.Root.IRootState) =>
    createSelector([PokemonSelectors.selectViewCurrentId], (currentPokemonId) => {
      const pokemon = ObjectMapper(state.DATABASE.pokemon, (x) => x[currentPokemonId]);
      const pokemonSpecies = ObjectMapper(state.DATABASE.pokemon_species, (x) => x[currentPokemonId]);

      const pokemonAbilities = state.DATABASE.pokemon_abilities[currentPokemonId];
      const abilities = ObjectMapper(state.DATABASE.abilities!, (x) => pokemonAbilities.map((y) => x[y.ability_id]));

      const pokemonStats = state.DATABASE.pokemon_stats[currentPokemonId];
      const statList = state.DATABASE.stats.identifier;

      const pokemonTypes = state.DATABASE.pokemon_types[currentPokemonId];
      const typeList = state.DATABASE.types.identifier;

      return {
        pokemon,
        pokemonSpecies,

        pokemonAbilities,
        abilities,

        pokemonStats,
        statList,

        pokemonTypes,
        typeList
      } as PokemonPanelTypes.Selectors.IPokemonDetails;
    })(state)
};

export { selectors, name };
