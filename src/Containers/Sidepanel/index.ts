import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import Sidepanel from "./Components";

const mapStateToProps = (state: any): any => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidepanel);
