import React from "react";
import "./index.scss";

import Navbar from "Containers/Navbar";
import Sidepanel from "Containers/Sidepanel";
import Pokemon from "Containers/Pokemon";
import PokemonPanel from "Containers/PokemonPanel";

function App() {
  return (
    <div id="pk-app" className="ui grid">
      <div className="sixteen wide column">
        <Navbar />
      </div>

      <div className="eight wide stretched column">
        <Pokemon />
      </div>

      <div className="eight wide column">
        <PokemonPanel />
      </div>
    </div>
  );
}

export default App;
