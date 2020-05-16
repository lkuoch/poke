import React from "react";
import "./index.scss";
import type { INavbar } from "Core/types";

function Navbar(props: INavbar.Redux.IMappedProps) {
  return (
    <div className="ui top attached menu">
      <div className="ui header">
        <span>Pokedex Explorer</span>
      </div>
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
  );
}

export default React.memo(Navbar);
