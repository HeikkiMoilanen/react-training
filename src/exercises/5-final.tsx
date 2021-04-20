import * as React from "react";
import { RosterItem } from "types/hockeyCards";
import { ListWrapper, ListItem } from "./5-common";

type InputHandler = React.ChangeEventHandler<HTMLInputElement>;

const HockeyCards: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;

  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange: InputHandler = (event) =>
    setInputValue(event.target.value);

  const filteredRoster = roster.filter((player) =>
    player.person.fullName.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Filter players"
        onChange={handleInputChange}
        value={inputValue}
      />
      <ListWrapper>
        {filteredRoster.map((player) => (
          <ListItem key={player.person.id} player={player} />
        ))}
      </ListWrapper>
    </>
  );
};

export default HockeyCards;
