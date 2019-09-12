import robodux from "@Libraries/Robodux";

import { IPokemon, IApp } from "@Types";

export enum Mode {
    Inline = "inline",
    Horizontal = "horizontal"
}

export const {actions, reducer, name} = robodux<IPokemon.IState, IPokemon.IActions, IApp.IRootState>({
    name: "Pokemon",
    reducts: {
        fetchPokemon: (state) => state,
        updatePokemon: (state, payload) => { }
    },
    initialState: {
        pokemon: {}
    }
});
