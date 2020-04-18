import type { DatabaseTypes } from "Core/types";

export function RetrievePokemonMove(pokemon_id: string): DatabaseTypes.Schema.pokemon_moves {
  return require(`Database/Data/pokemon_moves/${pokemon_id}.json`);
}
