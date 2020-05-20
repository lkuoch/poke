import React, { useEffect } from "react";

import "./index.scss";
import Gallery from "./gallery";
import Loader from "Components/Loader";
import { capitalizeString } from "Services/formattingService";
import type { IPokemonPanel } from "Core/types";

function PokemonPanel({ onInit, currentPokemonDetails }: IPokemonPanel.Redux.IMappedProps) {
  useEffect(() => {
    onInit();
  }, [onInit]);

  if (!currentPokemonDetails) {
    return <Loader loadingContent="Loading pokemon details..." />;
  }

  const pokemonName = capitalizeString(currentPokemonDetails.pokemon.identifier);

  const RenderTabularData = (obj: Object, title: string, valuesToInclude: Array<string> | null) => {
    const innerChildren = Object.keys(obj)
      .filter((x) => (valuesToInclude === null ? true : valuesToInclude!.includes(x)))
      .map((x) => (
        <tr className="pk-table-values" key={x}>
          {Array.isArray(obj[x]) ? (
            <>
              <td key={x}>{capitalizeString(x)}</td>
              {obj[x].map((y: string) => (
                <td key={y}>{capitalizeString(y)}</td>
              ))}
            </>
          ) : (
            <>
              <td key={x}>{capitalizeString(x)}</td>
              <td>{obj[x]}</td>
            </>
          )}
        </tr>
      ));

    return (
      <>
        <tr className="pk-table-heading">
          <td className="full-width" colSpan={3}>
            <span className="item">
              <span className="ui basic horizontal label">{title}</span>
            </span>
          </td>
        </tr>
        {innerChildren}
      </>
    );
  };

  const RenderPokemonDetails = () => {
    return (
      <table className="ui padded table">
        <thead className="full-width">
          <tr>
            <th colSpan={3}>Pokemon Details</th>
          </tr>
        </thead>
        <tbody>
          {RenderTabularData(currentPokemonDetails.abilities, "Pokemon Abilities", ["identifier"])}
          {RenderTabularData(currentPokemonDetails.pokemonSpecies, "Pokemon Species", null)}
        </tbody>
      </table>
    );
  };


  return (
    <div id="pk-pokemon-panel">
      <h3 className="ui block header">{pokemonName}</h3>;
      <Gallery imageLinks={currentPokemonDetails.imageLinks} />
      {RenderPokemonDetails()}
    </div>
  );
}

export default PokemonPanel;
