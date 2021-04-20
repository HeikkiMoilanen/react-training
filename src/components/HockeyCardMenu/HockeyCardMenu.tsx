import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import cx from "classnames";

import { RosterItem, TeamWithRoster } from "types/hockeyCards";
import { PlayerImage } from "components";

import "./HockeyCardMenu.scss";

export const HockeyCardMenu: React.FC<{ team: TeamWithRoster }> & Extras = (
  props
) => {
  const { team } = props;

  return (
    <Wrapper>
      {team.roster.roster.map((player) => (
        <Link key={player.person.id} playerId={player.person.id}>
          <Item player={player} />
        </Link>
      ))}
    </Wrapper>
  );
};

type Extras = {
  Wrapper: typeof Wrapper;
  Link: typeof Link;
  Item: typeof Item;
};

const Wrapper: React.FC<React.HTMLAttributes<HTMLUListElement>> = (props) => {
  const { className, ...rest } = props;

  return <ul {...rest} className={cx("player-image", className)} />;
};

HockeyCardMenu.Wrapper = Wrapper;

type LinkProps = Omit<React.ComponentProps<typeof RouterLink>, "to">;

const Link: React.FC<LinkProps & { playerId: number }> = (props) => {
  const { className, playerId, ...rest } = props;
  return (
    <RouterLink
      {...rest}
      className={cx("hockey-card-menu-item__link", className)}
      to={`/hockey-cards/${playerId}`}
    />
  );
};

HockeyCardMenu.Link = Link;

const Item: React.FC<
  React.HTMLAttributes<HTMLLIElement> & { player: RosterItem }
> = (props) => {
  const { player, className, ...rest } = props;
  const { person, jerseyNumber, position } = player;
  const { id, fullName } = person;

  return (
    <li {...rest} className={cx("hockey-card-menu-item", className)}>
      <PlayerImage
        className="hockey-card-menu-item__image"
        size="small"
        id={id}
        fullName={fullName}
      />

      <div className="hockey-card-menu-item__nameWrapper">
        <p className="hockey-card-menu-item__fullName">{fullName}</p>
        <p className="hockey-card-menu-item__position">{position.name}</p>
      </div>

      <span className="hockey-card-menu-item__jerseyNumber">
        {jerseyNumber}
      </span>
    </li>
  );
};

HockeyCardMenu.Item = Item;
