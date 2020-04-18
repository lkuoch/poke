import { Dispatch } from "redux";
import { connect } from "react-redux";

// Current component
import Sidepanel from "./Components";

const mapStateToProps = (_state: any): any => {
  return {};
};

const mapDispatchToProps = (_dispatch: Dispatch): any => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidepanel);
