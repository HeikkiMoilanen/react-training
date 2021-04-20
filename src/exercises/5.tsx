/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { RosterItem } from "types/hockeyCards";
import { ListWrapper, ListItem } from "./5-common";

// You may use this helper type if you decide to define onChange handler on
// function body insted of defining it inline in JSX
type InputHandler = React.ChangeEventHandler<HTMLInputElement>;

const HockeyCards: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  // inputValue should come from React.useState
  const inputValue = "";

  // Filter by player.person.fullName
  const filteredRoster = roster.filter((player) => true);

  // Empty element below is called React.Fragment (can also be used with <React.Fragment></React.Fragment>)
  // It does not render anything. React only allows returning single JSX element from component, but Fragment
  // allows us to return more tham one node at the time
  return (
    <>
      {/* Change input to controlled by adding value and onChange props */}
      <input type="text" placeholder="FIXME" />

      <ListWrapper>
        {filteredRoster.map((player) => (
          <ListItem key={player.person.id} player={player} />
        ))}
      </ListWrapper>
    </>
  );
};

export default HockeyCards;
