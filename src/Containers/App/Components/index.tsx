// Libraries
import React from "react";
import Navbar from "@Containers/Layout/Navbar";

// Copmonents
import Pokemon from "@Containers/Content/Pokemon";

function App() {
  return (
    <div id="app">
      <Navbar />
      <Pokemon />
    </div>
  );
}

export default App;