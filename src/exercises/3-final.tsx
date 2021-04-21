import * as React from "react";

import { Player } from "types/hockeyCards";
import { PlayerImage, Flag } from "components";

import "components/HockeyCard/HockeyCard.scss";
import { players } from "./data";

const data = { ...players.pekka, captain: true, alternateCaptain: false };

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

  if (!captainStatus) {
    return null;
  }

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
