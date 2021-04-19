import * as React from "react";
import { useRouteMatch } from "react-router-dom";

import { PlayerResponse } from "../../types";
import { useFetch } from "../../useFetch";
import { getNhlApiUrl } from "../../utils";
import PlayerImage from "../PlayerImage";
import Flag from "../Flag";

import "./HockeyCard.scss";

const HockeyCard: React.FC = (props) => {
  const routeMatch = useRouteMatch<{ id: string }>("/hockey-cards/:id");

  const playerId = routeMatch?.params.id;
  const url = playerId ? getNhlApiUrl("people", playerId) : "";

  const { data, isLoading, error } = useFetch<PlayerResponse | null>(url, null);

  if (!playerId) {
    return <div>Pick player from menu</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.people.length === 0) {
    return null;
  }

  const [player] = data.people;

  const {
    fullName,
    height,
    weight,
    birthDate,
    nationality,
    primaryNumber,
    primaryPosition,
  } = player;

  const position = primaryPosition.name;

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
    <div className="HockeyCard">
      <PlayerImage size="huge" className="HockeyCard__image" {...player} />
      {captainStatus && (
        <div className="HockeyCard__captainStatus">{captainStatus}</div>
      )}
      <div className="HockeyCard__primaryNumber">{primaryNumber}</div>
      <div className="HockeyCard__details">
        <div className="HockeyCard__fullName">
          <span> {fullName}</span>
          <Flag nationality={nationality} />
        </div>

        <div className="HockeyCard__position">{position}</div>

        <table className="HockeyCard__detailTable">
          <tr>
            <td>Height:</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Birth date:</td>
            <td>{birthDate}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default HockeyCard;
