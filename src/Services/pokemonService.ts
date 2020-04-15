// Base pokemon path
const basePath = "Assets/pokemon";

// Image options
export enum RetrievePokemonImageOptions {
  Back = "Back",
  BackShiny = "BackShiny",
  BackShinyFemale = "BackShinyFemale",

  Default = "Default",
  DefaultFemale = "DefaultFemale",

  Model = "Model",

  Official = "Official",

  Shiny = "Shiny",
  ShinyFemale = "ShinyFemale"
}

export function RetrieveRandomPokemonImage(): string {
  const randomId = Math.floor(Math.random() * Math.floor(807)) + 1;
  return `${basePath}/official/${randomId}.png`;
}

export function RetrievePokemonImage(
  id: string,
  option: RetrievePokemonImageOptions = RetrievePokemonImageOptions.Default
): string {
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
