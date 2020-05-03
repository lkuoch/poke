import React, { useEffect } from "react";
import Swiper from "swiper";

import "./index.scss";
import Loader from "Components/loader";
import type { PokemonPanelTypes } from "Core/types";

function PokemonPanel(props: PokemonPanelTypes.Redux.IMappedProps) {
  // Instantiate carousel
  useEffect(() => {
    if (props.currentPokemonDetails)
      new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
  }, [props.currentPokemonDetails]);

  if (!props || !props.currentPokemonDetails) {
    return <Loader loadingContent="Loading pokemon details..." />;
  }

  // const HideSliderOnError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  //   const imgContainer = event.currentTarget.parentElement;
  //   imgContainer?.parentElement?.removeChild(imgContainer);
  // };

  /* Carousel component
  const PokemonCarousal = () => {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(
                props.currentPokemonId,
                RetrievePokemonImageOptions.Official
              )}
              onError={(e) => HideSliderOnError(e)}
              alt="official"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(
                props.currentPokemonId,
                RetrievePokemonImageOptions.Default
              )}
              onError={(e) => HideSliderOnError(e)}
              alt="default"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(
                props.currentPokemonId,
                RetrievePokemonImageOptions.DefaultFemale
              )}
              onError={(e) => HideSliderOnError(e)}
              alt="female"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(props.currentPokemonId, RetrievePokemonImageOptions.Model)}
              onError={(e) => HideSliderOnError(e)}
              alt="model"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(props.currentPokemonId, RetrievePokemonImageOptions.Shiny)}
              onError={(e) => HideSliderOnError(e)}
              alt="default"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(
                props.currentPokemonId,
                RetrievePokemonImageOptions.ShinyFemale
              )}
              onError={(e) => HideSliderOnError(e)}
              alt="shiny-female"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(props.currentPokemonId, RetrievePokemonImageOptions.Back)}
              onError={(e) => HideSliderOnError(e)}
              alt="back"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(
                props.currentPokemonId,
                RetrievePokemonImageOptions.BackShiny
              )}
              onError={(e) => HideSliderOnError(e)}
              alt="back"
              className="pokemon-image"
            />
          </div>

          <div className="swiper-slide">
            <img
              src={RetrievePokemonImage(
                props.currentPokemonId,
                RetrievePokemonImageOptions.BackShinyFemale
              )}
              onError={(e) => HideSliderOnError(e)}
              alt="back"
              className="pokemon-image"
            />
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    );
  };
  */
  const PokemonTitle = () => {
    const pokemonName = String(props.currentPokemonDetails.pokemon.identifier);
    const formattedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    return <h3 className="ui block header">{formattedPokemonName}</h3>;
  };

  return (
    <div className="pk-pokemon-panel">
      <PokemonTitle />
    </div>
  );
}

export default PokemonPanel;
