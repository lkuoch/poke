// Libraries
import React from "react";

// Types
import { IPokemon } from "@Types";

export default React.memo((props: IPokemon.IMappedProps) => {
  console.log("POKEMON data", props.pokemon);

  return <div>Pokemon Component Works</div>;
});
