import * as React from "react";

import { Player } from "types/hockeyCards";
import { PlayerImage, Flag } from "components";

import "components/HockeyCard/HockeyCard.scss";

const CardLeftCornerBadge: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return (
    <div className={`hockey-card__leftCornerBadge ${className}`}>
      {children}
    </div>
  );
};

const CardRightCornerBadge: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return (
    <div className={`hockey-card__rightCornerBadge ${className}`}>
      {children}
    </div>
  );
};

const CaptainStatus: React.FC<{ player: Player; className?: string }> = (
  props
) => {
  const { player, className = "" } = props;

  const getCaptainStatus = () => {
    if (player.captain) {
      return "C";
    }

    if (player.alternateCaptain) {
      return "A";
    }

    return "";
  };

  const captainStatus = getCaptainStatus();

  return (
    <CardLeftCornerBadge className={className}>
      {captainStatus}
    </CardLeftCornerBadge>
  );
};

const HockeyCard: React.FC<Props> = (props) => {
  const { player } = props;

  return (
    <div className="hockey-card__wrapper">
      <PlayerImage size="huge" className="hockey-card__image" {...player} />

      <CaptainStatus player={player} />

      <CardRightCornerBadge>{player.primaryNumber}</CardRightCornerBadge>

      <div className="hockey-card__details">
        <div className="hockey-card__title">
          <span>{player.fullName}</span>
          <Flag nationality={player.nationality} />
        </div>

        <div className="hockey-card__subTitle">
          {player.primaryPosition.name}
        </div>

        <table className="hockey-card__detailTable">
          <tr>
            <td>Height:</td>
            <td>{player.height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{player.weight}</td>
          </tr>
          <tr>
            <td>Birth date:</td>
            <td>{player.birthDate}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const data: Player = {
  id: 8479339,
  fullName: "Patrik Laine",
  link: "/api/v1/people/8479339",
  firstName: "Patrik",
  lastName: "Laine",
  primaryNumber: "29",
  birthDate: "1998-04-19",
  currentAge: 23,
  birthCity: "TAMPERE",
  birthCountry: "FIN",
  nationality: "FIN",
  height: "6' 5\"",
  weight: 210,
  active: true,
  alternateCaptain: true,
  captain: false,
  rookie: false,
  shootsCatches: "R",
  rosterStatus: "Y",
  currentTeam: {
    id: 29,
    name: "Columbus Blue Jackets",
    link: "/api/v1/teams/29",
  },
  primaryPosition: {
    code: "L",
    name: "Left Wing",
    type: "Forward",
    abbreviation: "LW",
  },
};

const HockeyCardContainer: React.FC = (props) => <HockeyCard player={data} />;
export default HockeyCardContainer;

type Props = { player: Player };
