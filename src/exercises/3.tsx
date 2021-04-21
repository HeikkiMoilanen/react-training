/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { Player } from "types/hockeyCards";
import { PlayerImage, Flag } from "components";

import "components/HockeyCard/HockeyCard.scss";
import { players } from "./data";

// here you can adjust player's captain status to test changes in your code
const data = { ...players.pekka, captain: true, alternateCaptain: false };

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
// 🔥 For extra points, make a CaptainStatus component that is fully responsible for displaying captain status letter in the topleft corner.
// It should use CardLeftCornerBadge component that you make (similar to CardRightCornerBadge).
// It should also include the logic of showing / not showing the captain status.

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
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

const HockeyCardContainer: React.FC = (props) => <HockeyCard player={data} />;
export default HockeyCardContainer;

type Props = { player: Player };
