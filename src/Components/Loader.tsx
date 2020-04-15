import React from "react";
import { Dimmer, Loader as SemanticLoader, Segment } from "semantic-ui-react";

export default function Loader({ loadingContent }) {
  return (
    <Segment>
      <Dimmer active inverted>
        <SemanticLoader active>{loadingContent}</SemanticLoader>
      </Dimmer>
    </Segment>
  );
}
