import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import NavbarComponent from "./Components";
import { actions, selectors } from "./slice";
import { Mode } from "./declarations";

// App component
import { actions as appActions, selectors as appSelectors } from "@Containers/App/slice";
import { Theme } from "@Containers/App/declarations";

import { INavbar, IApp } from "@Types";

const mapStateToProps = (state: IApp.IRootState): INavbar.IMappedState => {
  const { selectMode } = selectors;
  const { selectTheme } = appSelectors;

  return {
    mode: selectMode(state),
    theme: selectTheme(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): INavbar.IMappedDispatch => {
  return {
    updateMode: (payload: Mode) => dispatch(actions.updateMode(payload)),
    changeTheme: (payload: Theme) => dispatch(appActions.updateTheme(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComponent as any);
