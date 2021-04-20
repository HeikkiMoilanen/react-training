import * as React from "react";
import { RosterItem } from "types/hockeyCards";
import { ListWrapper, ListItem, PlayerCount, FilterInput } from "./6-common";

const App: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  const [inputValue, setInputValue] = React.useState("");

  const filteredRoster = roster.filter((player) =>
    player.person.fullName.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <PlayerCount count={filteredRoster.length} />
      <FilterInput value={inputValue} onChange={setInputValue} />
      <HockeyCardList roster={filteredRoster} />
    </>
  );
};

export default App;

const HockeyCardList: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  return (
    <ListWrapper>
      {roster.map((player) => (
        <ListItem key={player.person.id} player={player} />
      ))}
    </ListWrapper>
  );
};
