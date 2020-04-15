import React from "react";
import "./index.scss";

import Navbar from "Containers/Navbar";
import Sidepanel from "Containers/Sidepanel";
import Pokemon from "Containers/Pokemon";

function App() {
  return (
    <div id="app" className="ui grid">
      <div className="sixteen wide column">
        <Navbar />
      </div>

      <div className="three wide column">
        <Sidepanel />
      </div>

      <div className="thirteen wide stretched column">
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
