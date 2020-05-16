import { Dispatch } from "redux";
import { connect } from "react-redux";

import { actions, selectors } from "./reducer";
import Pokemon from "./Components";
import type { IApp, IPokemon } from "Core/types";

const mapStateToProps = (state: IApp.Root.IRootState): IPokemon.State.IMappedState => {
  const pokemon = selectors.selectPokemon(state);
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

const mapDispatchToProp = (dispatch: Dispatch): IPokemon.Redux.IMappedDispatch => {
  return {
    initView: (payload) => dispatch(actions.initView(payload)),
    updateCurrentViewId: (payload) => dispatch(actions.updateCurrentViewId(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Pokemon);
