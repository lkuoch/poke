// Libraries
import React from "react";

// Types
import { Pokemon } from "@App/types";

export default React.memo((props: Pokemon.Redux.IMappedProps) => {
  const { pokemon } = props;

  // Fallback, should put a spinner
  if (!pokemon || !pokemon.length) {
    return null;
  }

  return <div>Pokemon Component Works</div>;
});
