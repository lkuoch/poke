export namespace Models {}

export namespace Services {
  export interface IRetrieveNextPokemonLink {
    hasNextLink: boolean;
    nextLink: string;
  }
}

export namespace State {
  export interface IMeta {
    pagesToFetch: number;
    retryAttempts: number;
  }

  export interface IState {
    meta: IMeta;
    pokemon: Array<Object>;
  }

  export interface IMappedState extends State.IState {
    meta: State.IMeta;
    pokemon: Array<Object>;
  }
}

export namespace Redux {
  export interface IActions {
    fetchPokemon: never;

    updatePokemon: Array<Object>;
    addPokemon: Object;
  }

  export interface IDispatch {}

  export interface IMappedDispatch extends IDispatch {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}
