import React, { useEffect } from "react";
import Swiper from "swiper";

import "./index.scss";
import Loader from "Components/Loader";
import type { PokemonPanelTypes } from "Core/types";

function PokemonPanel(props: PokemonPanelTypes.Redux.IMappedProps) {
  // Instantiate carousel
  useEffect(() => {
    if (props.currentPokemonDetails)
      new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        preloadImages: true,

        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },

        pagination: {
          el: ".swiper-pagination"
        }
      });
  }, [props.currentPokemonDetails]);

  if (!props || !props.currentPokemonDetails) {
    return <Loader loadingContent="Loading pokemon details..." />;
  }

  const GalleryView = () => {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {props.currentPokemonDetails.imageLinks!.map((x, i) => (
            <div key={i} className="swiper-slide">
              <img
                src={x}
                alt="pokemon-image"
                onError={(x: any) => x.target.parentNode.parentNode && x.target.parentNode.parentNode.removeChild(x.target.parentNode)}
              />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  };

  const PokemonTitle = () => {
    const pokemonName = String(props.currentPokemonDetails.pokemon.identifier);
    const formattedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    return <h3 className="ui block header">{formattedPokemonName}</h3>;
  };

  return (
    <div className="pk-pokemon-panel">
      <PokemonTitle />
      {GalleryView()}
    </div>
  );
}

export default PokemonPanel;
