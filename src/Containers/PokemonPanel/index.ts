import { Dispatch } from "redux";
import { connect } from "react-redux";

import { selectors } from "./reducer";

import PokemonPanel from "./Components";
import type { AppTypes, PokemonPanelTypes } from "Core/types";

const mapStateToProps = (state: AppTypes.Root.IRootState): PokemonPanelTypes.State.IMappedState => {
  const pokemonDetails = selectors.selectPokemonDetails(state);
//   console.log('pd', pokemonDetails);
  return {
    pokemonDetails
  };
};

const mapDispatchToProps = (_dispatch: Dispatch): PokemonPanelTypes.Redux.IMappedDispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPanel);
