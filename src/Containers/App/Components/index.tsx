// Libraries
import React from "react";
import { Layout } from "antd";
import Navbar from "Containers/Layout/Navbar";
import Header from "Containers/Layout/Header";

// Copmonents
import Pokemon from "Containers/Content/Pokemon";

function App() {
  return (
    <Layout id="app">
      <Navbar />
      <Layout>
        <Header />
        <Pokemon />
      </Layout>
    </Layout>
  );
}

export default App;
