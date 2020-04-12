import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import PokemonListComponent from "./Components";
import { selectors } from "./reducer";

// Types
import { AppTypes, PokemonTypes } from "Core/types";

const mapStateToProps = (state: AppTypes.State.IRootState): PokemonTypes.State.IMappedState => {
  const { selectPokemon, selectMeta } = selectors;

  return {
    meta: selectMeta(state),
    pokemon: selectPokemon(state)
  };
};

const mapDispatchToProp = (_dispatch: Dispatch): PokemonTypes.Redux.IMappedDispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProp)(PokemonListComponent);
