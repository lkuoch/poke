import React from "react";
import { Layout } from "antd";

//* UI
const { Content } = Layout;

import { Pokemon } from "@App/types";

export default React.memo((props: Pokemon.Redux.IMappedProps) => {
  const { pokemon } = props;

  // Fallback, should put a spinner
  if (!pokemon || !pokemon.length) {
    return null;
  }

  return <Content id="pokemon-content">Pokemon Component Works</Content>;
});
