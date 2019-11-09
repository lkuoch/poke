// Libraries
import React from "react";

// Types
import { Pokemon } from "__Types__";

export default React.memo((props: Pokemon.Redux.IMappedProps) => {
  const { pokemon } = props;

  // Fallback, should put a spinner
  if (!pokemon || !pokemon.length) {
    return null;
  }

  console.log("POKEMON data", props.pokemon);

  return <div>Pokemon Component Works</div>;
});
