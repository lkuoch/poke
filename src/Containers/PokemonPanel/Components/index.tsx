import React from "react";

import "./index.scss";
import Loader from "Components/loader";
import type { PokemonPanelTypes } from "Core/types";

function PokemonPanel(props: PokemonPanelTypes.Redux.IMappedProps) {
  if (!props) {
    return <Loader loadingContent="Loading pokemon details..." />;
  }

  return <h1>Hello</h1>;
}

export default PokemonPanel;
