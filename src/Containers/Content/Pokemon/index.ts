import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import PokemonListComponent from "./Components";
import { actions, selectors } from "./redux";

// Types
import { App, Navbar, Pokemon } from "__Types__";

const mapStateToProps = (state: App.State.IRootState): Pokemon.State.IMappedState => {
  const { selectPokemon, selectFetchMeta } = selectors;

  return {
    fetchMeta: selectFetchMeta(state),
    pokemon: selectPokemon(state)
  };
};

const mapDispatchToProp = (dispatch: Dispatch): Pokemon.Redux.IMappedDispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProp)(PokemonListComponent as any);
