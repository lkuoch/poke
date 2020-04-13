import React, { useEffect } from "react";
import { Dimmer, Loader, Segment, Card, Image, Label } from "semantic-ui-react";
import type { PokemonTypes } from "Core/types";
import type { SemanticCOLORS } from "semantic-ui-react";

export default React.memo((props: PokemonTypes.Redux.IMappedProps) => {
  const { meta, view, data, initView } = props;

  // Create view when pokemon data has loaded
  useEffect(() => {
    initView(data.pokemon.identifier);
  }, [meta.hasLoaded === false]);

  if (!meta.hasLoaded) {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader active>Loading Pokemon...</Loader>
        </Dimmer>
      </Segment>
    );
  }

  return (
    <div className="ui segment">
      <Card.Group itemsPerRow={3}>
        {view.ids.map((id) => {
          const pokemonName = data.pokemon.identifier[id];
          const formattedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
          return (
            <Card key={`${id}`}>
              <Image
                src="https://fomantic-ui.com/images/wireframe/white-image.png"
                alt={pokemonName}
                wrapped
                ui={false}
              />

              <Card.Content>
                <Card.Header>{formattedPokemonName}</Card.Header>
                <Card.Meta></Card.Meta>
                <Card.Description></Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
});
