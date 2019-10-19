import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import PokemonListComponent from "./Components";
import { actions, selectors } from "./redux";

// Types
import { INavbar, IApp, IPokemon } from "@Types";

const mapStateToProps = (state: IApp.IRootState): IPokemon.IMappedState => {
  const { selectPokemon } = selectors;

  return {
    pokemon: selectPokemon(state)
  };
};

const mapDispatchToProp = (dispatch: Dispatch): IPokemon.IMappedDispatch => {
    return {

    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(PokemonListComponent as any);
