export namespace Models {
  export interface IConfig {
    endpoints: IEndpoints;
    features: IFeatures;
  }

  export interface IEndpoints {
    base: string;
    testPokemon: string;
  }

  export interface IFeatures {
    pokemon: IPokemon;
  }

  export interface IPokemon {
    enabled: boolean;
  }
}

export namespace Services {}

export namespace State {}

export namespace Redux {}
