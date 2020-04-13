import { Dispatch } from "redux";
import { connect } from "react-redux";

import Navbar from "./Components";
import type { AppTypes, NavbarTypes } from "Core/types";

const mapStateToProps = (state: AppTypes.Root.IRootState): NavbarTypes.State.IMappedState => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): NavbarTypes.Redux.IMappedDispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
