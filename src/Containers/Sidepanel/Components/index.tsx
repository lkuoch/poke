import React from "react";

function Sidepanel(props: any) {
  return (
    <div className="ui vertical fluid tabular menu">
      <div className="active item">Bio</div>
      <div className="item">Pics</div>
      <div className="item">Companies</div>
      <div className="item">Links</div>
    </div>
  );
}

export default React.memo(Sidepanel);
