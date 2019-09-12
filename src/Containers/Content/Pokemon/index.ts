import { Dispatch } from "redux";
import { connect } from "react-redux";
import get from "ts-get";

import PokemonListComponent from "./Components";
import * as mockData from "@Mock/pokemon-1.json";


const mapStateToProps = (state) => {
    return {
        mockData
    };
}

const mapDispatchToProp = (dispatch: Dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(PokemonListComponent as any)