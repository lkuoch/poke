import React from "react";
import { PokemonTypes } from "Core/types";
import { Card, Image } from "semantic-ui-react";
import type { SemanticCOLORS } from "semantic-ui-react";

export default React.memo((props: PokemonTypes.Redux.IMappedProps) => {
  const { pokemon } = props;
  const placeHolderImage = "https://fomantic-ui.com/images/wireframe/white-image.png";
  const cardColors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey"
  ];

  // Fallback, should put a spinner
  if (!pokemon || !pokemon.length) {
    return null;
  }

  const getColor = (idx: number): SemanticCOLORS => {
    return cardColors[idx % 12] as SemanticCOLORS;
  };

  const renderPokemon = () =>
    pokemon.map((p: any, pIdx) =>
      p.results.map((r: any, rIdx: number) => {
        const pokemonName = String(r.name.charAt(0).toUpperCase() + r.name.slice(1));
        return (
          <Card key={`${pIdx}${rIdx}`} color={getColor(rIdx)}>
            <Image src={placeHolderImage} alt="pokemon-image" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{pokemonName}</Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description></Card.Description>
            </Card.Content>
          </Card>
        );
      })
    );

  return (
    <div className="ui segment">
      <Card.Group itemsPerRow={4}>{renderPokemon()}</Card.Group>
    </div>
  );
});
