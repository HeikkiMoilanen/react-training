import { HockeyCard } from "components/HockeyCard";
import { RosterItem } from "types/hockeyCards";

import "./6.scss";

export const ListItem: React.FC<{ player: RosterItem }> = (props) => {
  const { player } = props;
  return (
    <HockeyCard.Wrapper className="small">
      <HockeyCard.Image {...player.person} size="default" />
      <HockeyCard.RightCornerBadge>
        {player.jerseyNumber}
      </HockeyCard.RightCornerBadge>
      <HockeyCard.Title>{player.person.fullName}</HockeyCard.Title>
      <HockeyCard.Subtitle>{player.position.name}</HockeyCard.Subtitle>
    </HockeyCard.Wrapper>
  );
};

export const ListWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { children, className = "" } = props;

  return (
    <div className={`exercise-6__listWrapper ${className}`}>
      <div>{children}</div>
    </div>
  );
};

export const PlayerCount: React.FC<{ count: number }> = (props) => (
  <div className="exercise-6__playerCount">
    Number of players: <b>{props.count}</b>
  </div>
);

type FilterInputProps = {
  value: string;
  onChange: (inputValue: string) => void;
};

export const FilterInput: React.FC<FilterInputProps> = (props) => {
  const { onChange, value } = props;

  type InputHandler = React.ChangeEventHandler<HTMLInputElement>;

  const handleInputChange: InputHandler = (event) =>
    onChange(event.target.value);

  return (
    <input
      type="text"
      placeholder="Filter players"
      onChange={handleInputChange}
      value={value}
    />
  );
};
