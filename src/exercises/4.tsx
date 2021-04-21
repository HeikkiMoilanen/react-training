import React from "react";
import { RosterItem } from "types/hockeyCards";
// Uncomment this
// import { ListWrapper, ListItem } from "./4-common";

// This code is rendered at http://localhost:3000/exercices/4
// Here, a roster of players is given to the HockeyCards component as props and the data is displayed as JSON.
// Please import ListWrapper and ListItem from ./4-common and use them to display the roster of players using those components.
// remember to add a key for each element you render from going through an array!
// You can see an example of the desired end result at http://localhost:3000/exercices/4-final

const HockeyCards: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  return (
    <pre style={{ whiteSpace: "pre", overflowY: "auto", width: "100%" }}>
      {JSON.stringify(roster, null, 2)}
    </pre>
  );
};

export default HockeyCards;
