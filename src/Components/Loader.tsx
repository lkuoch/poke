import React from "react";

import "./index.scss";
import type { ComponentTypes } from "Core/types";

export default function Loader({
  loadingContent,
  className
}: ComponentTypes.Loader.IProps & React.HTMLAttributes<HTMLDivElement>) {
  const loaderWrapperClassName = `pk-loader ${className ? className : ""}`;
  return (
    <div className={loaderWrapperClassName}>
      <div className="ui active inverted dimmer">
        <div className="ui text loader pk-text">{loadingContent}</div>
      </div>

      <img className="ui wireframe image" alt="loading-content" />
    </div>
  );
}
