export namespace Pokemon {
    export namespace Models {}

    export namespace Services {
      export interface IRetrieveNextPokemonLink {
        hasNextLink: boolean;
        nextLink: string;
      }
    }
  
    export namespace State {
      export interface IFetchMeta {
        slices: number;
        retryAttempts: number;
      }
  
      export interface IState {
        fetchMeta: IFetchMeta;
        pokemon: Array<Object>;
      }
  
      export interface IMappedState extends Pokemon.State.IState {
        fetchMeta: Pokemon.State.IFetchMeta;
        pokemon: Array<Object>;
      }
    }
  
    export namespace Redux {
      export interface IActions {
        fetchPokemon: never;
        fetchPokemonRequest: never;
        fetchPokemonRequestSuccess: Object;
        fetchPokemonRequestFailure: never;
  
        updatePokemon: Object;
      }
  
      export interface IDispatch {}
  
      export interface IMappedDispatch extends IDispatch {}
  
      export type IMappedProps = Pokemon.State.IMappedState & IMappedDispatch;
    }
  }