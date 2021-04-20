/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { RosterItem } from "types/hockeyCards";
import { ListWrapper, ListItem, PlayerCount, FilterInput } from "./6-common";

const App: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  // We want to change behaviour so that player count shows count of filtered players.
  // Therefore we need to "lift up" state so that it is defined in this component and consumed in children
  // FilterInput also seems to be used on wrong level. Move it from HockeyCardList component to here.

  return (
    <>
      <PlayerCount count={roster.length} />
      <HockeyCardList roster={roster} />
    </>
  );
};

export default App;

const HockeyCardList: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  const [inputValue, setInputValue] = React.useState("");

  const filteredRoster = roster.filter((player) =>
    player.person.fullName.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <FilterInput onChange={setInputValue} value={inputValue} />
      <ListWrapper>
        {filteredRoster.map((player) => (
          <ListItem key={player.person.id} player={player} />
        ))}
      </ListWrapper>
    </>
  );
};


