import { Dispatch } from "redux";
import { connect } from "react-redux";

import { actions, selectors } from "./reducer";
import Pokemon from "./Components";
import type { IRootState, IPokemon } from "Core/types";

const mapStateToProps = (state: IRootState): IPokemon.IMappedState => {
  const currentID = selectors.selectCurrentId(state);
  const tableFields = selectors.selectTableFields(state);
  const tableFieldAliases = selectors.selectTableFieldAliases(state);

  const ids = selectors.selectPokemonIds(state);
  const pokemon = selectors.selectPokemonList(state);

  return {
    currentID,
    tableFields,
    tableFieldAliases,

    ids,
    pokemon
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IPokemon.IMappedDispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
