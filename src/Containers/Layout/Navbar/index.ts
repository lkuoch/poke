import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import NavbarComponent from "./Components";
import { actions, selectors } from "./reducer";
import { Mode as ModeModel } from "./models";

// App component
import { actions as appActions, selectors as appSelectors } from "Containers/App/reducer";
import { Theme as ThemeModel } from "Containers/App/models";

// Types
import { Navbar, App } from "Core/types";

const mapStateToProps = (state: App.State.IRootState): Navbar.State.IMappedState => {
  const { selectMode } = selectors;
  const { selectTheme } = appSelectors;

  return {
    mode: selectMode(state),
    theme: selectTheme(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Navbar.Redux.IMappedDispatch => {
  return {
    updateMode: (payload: ModeModel) => dispatch(actions.updateMode(payload)),
    changeTheme: (payload: ThemeModel) => dispatch(appActions.updateTheme(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent as any);
