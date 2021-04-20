import { HockeyCard } from "components/HockeyCard";
import { RosterItem } from "types/hockeyCards";
import "./4.scss";

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
    <div className={`exercise-4__listWrapper ${className}`}>
      <div>{children}</div>
    </div>
  );
};
