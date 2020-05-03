import React from "react";

import "./index.scss";
import Gallery from "./gallery";
import Loader from "Components/Loader";
import type { PokemonPanelTypes } from "Core/types";

function PokemonPanel(props: PokemonPanelTypes.Redux.IMappedProps) {
  if (!props || !props.currentPokemonDetails) {
    return <Loader loadingContent="Loading pokemon details..." />;
  }

  const PokemonTitle = () => {
    const pokemonName = String(props.currentPokemonDetails.pokemon.identifier);
    const formattedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    return <h3 className="ui block header">{formattedPokemonName}</h3>;
  };

  return (
    <div id="pk-pokemon-panel">
      <PokemonTitle />
      <Gallery imageLinks={props.currentPokemonDetails.imageLinks} />

      <div className="ui segment">
        <pre>{JSON.stringify(props.currentPokemonDetails, null, 2)}</pre>
      </div>
    </div>
  );
}

export default PokemonPanel;
