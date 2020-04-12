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
