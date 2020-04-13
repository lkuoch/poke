import { Dispatch } from "redux";
import { connect } from "react-redux";

import Pokemon from "./Components";
import { actions, selectors } from "./reducer";
import { selectors as DatabaseSelectors } from "Database/reducer";
import type { AppTypes, PokemonTypes } from "Core/types";

const mapStateToProps = (state: AppTypes.Root.IRootState): PokemonTypes.State.IMappedState => {
  const pokemon = DatabaseSelectors.selectPokemon(state);
  const meta = selectors.selectMeta(state);
  const view = selectors.selectView(state);

  return {
    view,
    meta,

    data: {
      pokemon
    }
  };
};

const mapDispatchToProp = (dispatch: Dispatch): PokemonTypes.Redux.IMappedDispatch => {
  return {
    initView: (payload) => dispatch(actions.initView(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Pokemon);
