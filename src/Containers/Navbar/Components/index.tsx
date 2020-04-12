import React from "react";
import styled from "styled-components";
// import * as Models from "../models";
import type { NavbarTypes } from "Core/types";

const StyledHeader = styled.h1.attrs(() => ({ className: "ui header" }))`
  margin: 0.5rem !important;
`;

function Navbar(props: NavbarTypes.Redux.IMappedProps) {
  // const { mode, theme, updateMode } = props;

  return (
    <>
      <div className="ui top attached menu">
        <StyledHeader>Pokedex Explorer</StyledHeader>
        <div className="right menu">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input className="prompt" type="text" placeholder="Search {Pokemon}..." />
              <i className="search link icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Navbar);
