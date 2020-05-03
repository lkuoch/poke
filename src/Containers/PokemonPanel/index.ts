import { Dispatch } from "redux";
import { connect } from "react-redux";
import { selectors } from "./reducer";
import { selectors as AppSelectors } from "Containers/App/reducer";
import { selectors as PokemonSelectors } from "Containers/Pokemon/reducer";

import PokemonPanel from "./Components";
import type { AppTypes, PokemonPanelTypes } from "Core/types";

const mapStateToProps = (state: AppTypes.Root.IRootState): PokemonPanelTypes.State.IMappedState => {
  const pokemonImageOptions = AppSelectors.selectPokemonImageOptions(state);
  const currentPokemonDetails = selectors.selectCurrentView(state);
  const currentPokemonId = PokemonSelectors.selectViewCurrentId(state);

  return {
    pokemonImageOptions,
    currentPokemonDetails,
    currentPokemonId
  };
};

const mapDispatchToProps = (_dispatch: Dispatch): PokemonPanelTypes.Redux.IMappedDispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPanel);
