import React from "react";
import styled from "styled-components";

const StyledSidepanel = styled.div.attrs(() => ({ className: "ui vertical fluid tabular menu" }))`
  padding-right: 0 !important;
  word-wrap: break-word !important;
`;

function Sidepanel(props: any) {
  // const { mode, theme, updateMode } = props;

  return (
    <StyledSidepanel>
      <div className="active item">Bio</div>
      <div className="item">Pics</div>
      <div className="item">Companies</div>
      <div className="item">Links</div>
    </StyledSidepanel>
  );
}

export default React.memo(Sidepanel);
