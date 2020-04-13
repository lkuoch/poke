import { RetrievePokemonImageOptions } from "./models";

export function RetrievePokemonImage(
  id: string,
  option: RetrievePokemonImageOptions = RetrievePokemonImageOptions.Default
): string {
  const basePath = "Assets/pokemon";
  switch (option) {
    case RetrievePokemonImageOptions.Back: {
      return `${basePath}/back/${id}.png`;
    }

    case RetrievePokemonImageOptions.BackShiny: {
      return `${basePath}/back/shiny/${id}.png`;
    }

    case RetrievePokemonImageOptions.BackShinyFemale: {
      return `${basePath}/back/shiny/female/${id}.png`;
    }

    case RetrievePokemonImageOptions.Default: {
      return `${basePath}/${id}.png`;
    }

    case RetrievePokemonImageOptions.DefaultFemale: {
      return `${basePath}/female/${id}.png`;
    }

    case RetrievePokemonImageOptions.Model: {
      return `${basePath}/model/${id}.png`;
    }

    case RetrievePokemonImageOptions.Official: {
      return `${basePath}/official/${id}.png`;
    }

    case RetrievePokemonImageOptions.Shiny: {
      return `${basePath}/shiny/${id}.png`;
    }

    case RetrievePokemonImageOptions.ShinyFemale: {
      return `${basePath}/shiny/female/${id}.png`;
    }

    default:
      return `${basePath}/${id}.png`;
  }
}

export function RetrieveObjectKeysAsArray(obj: Object): Array<string> {
  return Object.keys(obj);
}
