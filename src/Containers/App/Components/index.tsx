import React from "react";
import styled from "styled-components";

import Navbar from "Containers/Navbar";
import Sidepanel from "Containers/Sidepanel";
import Pokemon from "Containers/Pokemon";

const StyledApp = styled.div.attrs(() => ({ id: "app", className: "ui grid" }))`
  margin: 0.5rem !important;
`;

const StyledNavbarWrapper = styled.div.attrs(() => ({ className: "sixteen wide column" }))`
  padding-bottom: 0 !important;
  padding-top: 0 !important;
`;

const mockView = (
  <div className="ui four cards">
    <a className="primary card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="secondary card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="red card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="orange card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="yellow card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="olive card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="green card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="teal card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="blue card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="violet card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="purple card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="pink card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="brown card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="grey card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
    <a className="black card">
      <div className="image">
        <img
          className="ui wireframe image"
          src="https://fomantic-ui.com/images/wireframe/white-image.png"
        />
      </div>
    </a>
  </div>
);

function App() {
  return (
    <StyledApp>
      <StyledNavbarWrapper>
        <Navbar />
      </StyledNavbarWrapper>

      <div className="three wide column">
        <Sidepanel />
      </div>

      <div className="thirteen wide stretched column">
        <Pokemon />
      </div>
    </StyledApp>
  );
}

export default App;
