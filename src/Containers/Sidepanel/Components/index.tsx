import React from "react";

function Sidepanel(props: any) {
  return (
    <div className="ui vertical fluid tabular menu">
      <div className="active item">Pokemon</div>
      <div className="item">Moves</div>
      <div className="item">Items</div>
      <div className="item">Berries</div>
    </div>
  );
}

export default React.memo(Sidepanel);
