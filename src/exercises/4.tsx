import React from "react";
import { RosterItem } from "types/hockeyCards";
// Uncomment this
// import { ListWrapper, ListItem } from "./4-common";

const HockeyCards: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  return (
    <pre style={{ whiteSpace: "pre", overflowY: "auto", width: "100%" }}>
      {JSON.stringify(roster, null, 2)}
    </pre>
  );
};

export default HockeyCards;
