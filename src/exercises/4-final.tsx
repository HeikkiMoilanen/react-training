import { RosterItem } from "types/hockeyCards";
import { ListWrapper, ListItem } from "./4-common";

const HockeyCards: React.FC<{ roster: RosterItem[] }> = (props) => {
  const { roster } = props;
  return (
    <ListWrapper>
      {roster.map((player) => (
        <ListItem key={player.person.id} player={player} />
      ))}
    </ListWrapper>
  );
};

export default HockeyCards;
