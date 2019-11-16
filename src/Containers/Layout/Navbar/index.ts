import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import NavbarComponent from "./Components";
import { actions, selectors } from "./redux";
import { Mode } from "./models";

// App component
import { actions as appActions, selectors as appSelectors } from "@Containers/App/redux";
import { Theme } from "@Containers/App/models";

// Types
import { Navbar, App } from "@App/types";

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
    updateMode: (payload: Mode) => dispatch(actions.updateMode(payload)),
    changeTheme: (payload: Theme) => dispatch(appActions.updateTheme(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent as any);
