import React, { useEffect } from "react";

import "./index.scss";
import Gallery from "./gallery";
import Loader from "Components/Loader";
import { capitalizeString } from "Services/formattingService";
import type { PokemonPanelTypes } from "Core/types";

function PokemonPanel(props: PokemonPanelTypes.Redux.IMappedProps) {
  useEffect(() => {
    props.onInit();
  }, [props]);

  if (!props || !props.currentPokemonDetails) {
    return <Loader loadingContent="Loading pokemon details..." />;
  }

  const PokemonTitle = () => {
    const pokemonName = capitalizeString(props.currentPokemonDetails.pokemon.identifier);

    return <h3 className="ui block header">{pokemonName}</h3>;
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
