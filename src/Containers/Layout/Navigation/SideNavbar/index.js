import { connect } from "react-redux";
import * as app from "Containers/App/actions";
import * as sideNavbar from "./actions";
import SideNavbar from "./Components/index";

const mapStateToProps = state => {
  const theme = state.getIn(["App", "theme"], "light");

  const mode = state.getIn(["SideNavbar", "mode"], "inline");

  return {
    _state: {
      mode,
      theme
    }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    _actions: {
      changeTheme: () => {
        dispatch(app.changeTheme());
      },

      changeMode: () => {
        dispatch(sideNavbar.changeMode());
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavbar);
