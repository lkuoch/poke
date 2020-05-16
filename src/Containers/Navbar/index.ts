import { Dispatch } from "redux";
import { connect } from "react-redux";

import Navbar from "./Components";
import type { IApp, INavbar } from "Core/types";

const mapStateToProps = (state: IApp.Root.IRootState): INavbar.State.IMappedState => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): INavbar.Redux.IMappedDispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
