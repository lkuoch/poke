import React from "react";
import "./index.scss";

import Navbar from "Containers/Navbar";
import Pokemon from "Containers/Pokemon";
import PokemonPanel from "Containers/PokemonPanel";

function App() {
  return (
    <div id="pk-app" className="ui grid">
      <div className="pk-navbar-wrapper sixteen wide column">
        <Navbar />
      </div>

      <div className="pk-content1-wrapper eight wide stretched column">
        <Pokemon />
      </div>

      <div className="pk-content2-wrapper eight wide column">
        <PokemonPanel />
      </div>
    </div>
  );
}

export default App;
