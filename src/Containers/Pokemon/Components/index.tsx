import React, { useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Loader, { LoaderOptions } from "Components/loader";
import { RetrievePokemonImage, RetrievePokemonImageOptions } from "Services/pokemonService";

import type { PokemonTypes } from "Core/types";

function Pokemon(props: PokemonTypes.Redux.IMappedProps) {
  const { meta, view, data, initView } = props;

  useEffect(() => {
    if (!meta.hasLoaded) {
      // Create view when pokemon data has loaded
      initView(data.pokemon.identifier);
    }
  }, [meta, data, initView]);

  // Show loader when loading pokemon
  if (!meta.hasLoaded) {
    return (
      <Loader loadingContent="Loading pokemon..." loaderOptions={LoaderOptions.ShowRandomPokemon} />
    );
  }

  // Grid cell of pokemon data
  const Cell = ({ columnIndex, rowIndex, style, data: propData }) => {
    const { pokemons, columnCount } = propData;
    const singleColumnIndex = columnIndex + rowIndex * columnCount;
    const id = pokemons[singleColumnIndex];
    const pokemonName = data.pokemon.identifier[id];
    const formattedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    return (
      <div style={style}>
        <div key={`${id}`} className="ui fluid card">
          <img
            className="ui image"
            src={RetrievePokemonImage(id, RetrievePokemonImageOptions.Official)}
            alt={pokemonName}
          />
          <div className="content">
            <a className="header">{formattedPokemonName}</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="ui segment"
      style={{
        minHeight: "100vh",
        position: "sticky",
        top: "0px"
      }}
    >
      <AutoSizer defaultWidth={1920} defaultHeight={1080}>
        {({ width, height }) => {
          const cardWidth = 300;
          const cardHeight = 355;
          const columnCount = Math.floor(width / cardWidth);
          const rowCount = Math.ceil(view.ids.length / columnCount);

          return (
            <Grid
              className="ui link cards"
              width={width}
              height={height}
              columnCount={columnCount}
              columnWidth={cardWidth}
              rowCount={rowCount}
              rowHeight={cardHeight}
              itemData={{ pokemons: view.ids, columnCount }}
            >
              {Cell}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
}

export default React.memo(Pokemon);
