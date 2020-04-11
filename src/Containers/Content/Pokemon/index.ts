import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import PokemonListComponent from "./Components";
import { selectors } from "./reducer";

// Types
import { App, Pokemon } from "Core/types";

const mapStateToProps = (state: App.State.IRootState): Pokemon.State.IMappedState => {
  const { selectPokemon, selectMeta } = selectors;

  return {
    meta: selectMeta(state),
    pokemon: selectPokemon(state)
  };
};

const mapDispatchToProp = (_dispatch: Dispatch): Pokemon.Redux.IMappedDispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProp)(PokemonListComponent as any);
