/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { Player } from "types/hockeyCards";
import { PlayerImage, Flag } from "components";

import "components/HockeyCard/HockeyCard.scss";

// 💯 Use this component for showing players primary number instead of using <div> directly
// Note that passing className is no longer necessary, but it can be passed if more classes are wanted
const CardRightCornerBadge: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return (
    <div className={`hockey-card__rightCornerBadge ${className}`}>
      {children}
    </div>
  );
};

// 💯 Make CardLeftCornerBadge-component for showing captain status (className="hockey-card__leftCornerBadge")
// 🔥 For extra points, make more detailed CaptainStatus component that
// uses CardLeftCornerBadge and features showing logic for captain status

const HockeyCard: React.FC<Props> = (props) => {
  const { player } = props;

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
    <div className="hockey-card__wrapper">
      <PlayerImage size="huge" className="hockey-card__image" {...player} />

      {captainStatus ? (
        <div className="hockey-card__leftCornerBadge">{captainStatus}</div>
      ) : null}

      <div className="hockey-card__rightCornerBadge">
        {player.primaryNumber}
      </div>
      <div className="hockey-card__details">
        <div className="hockey-card__fullName">
          <span>{player.fullName}</span>
          <Flag nationality={player.nationality} />
        </div>

        <div className="hockey-card__position">
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
