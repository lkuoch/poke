import React from "react";
import { RetrieveRandomPokemonImage } from "Services/pokemonService";

import "./index.scss";
import type { ComponentTypes } from "Core/types";

export enum LoaderOptions {
  ShowRandomPokemon = "ShowRandomPokemon",
  None = "None"
}

export default function Loader({
  loadingContent,
  loaderOptions = LoaderOptions.None
}: ComponentTypes.Loader.IProps) {
  return (
    <div className="ui segment pk-loader">
      <div className="ui active inverted dimmer">
        <div className="ui text loader pk-text">{loadingContent}</div>
      </div>

      {loaderOptions === LoaderOptions.ShowRandomPokemon && (
        <img
          className="ui wireframe image"
          alt="random-pokemon-loading"
          src={RetrieveRandomPokemonImage()}
        />
      )}
    </div>
  );
}
