import React from "react";
// import * as Models from "../models";
import type { NavbarTypes } from "Core/types";

function Navbar(props: NavbarTypes.Redux.IMappedProps) {
  // const { mode, theme, updateMode } = props;

  return (
    <div className="ui pointing menu">
      <div role="menuitem" className="active item" onClick={() => console.log("a")}>
        Home
      </div>
      <div role="menuitem" className="item" onClick={() => console.log("b")}>
        Messages
      </div>
      <div role="menuitem" className="item" onClick={() => console.log("c")}>
        Friends
      </div>
      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
