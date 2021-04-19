import * as React from "react";
import { Link } from "react-router-dom";

import { TeamResponse } from "../../types";
import { useFetch } from "../../useFetch";
import { getNhlApiUrl } from "../../utils";
import PlayerImage from "../PlayerImage";

import "./HockeyCardMenu.scss";

const HockeyCardMenu: React.FC<{ teamId: number }> = (props) => {
  const query = { expand: "team.roster" };
  const url = getNhlApiUrl("teams", props.teamId, query);

  const { data, isLoading } = useFetch<TeamResponse | null>(url, null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.teams.length === 0) {
    return null;
  }

  const [team] = data.teams;

  return (
    <ul className="HockeyCardMenu">
      {team.roster.roster.map((player) => {
        const { person, jerseyNumber, position } = player;
        const { id, fullName } = person;

        return (
          <li className="HockeyCardMenuItem" key={id}>
            <Link
              className="HockeyCardMenuItem__link"
              to={`/hockey-cards/${id}`}
            >
              <PlayerImage
                className="HockeyCardMenuItem__image"
                size="small"
                id={id}
                fullName={fullName}
              />

              <div className="HockeyCardMenuItem__nameWrapper">
                <p className="HockeyCardMenuItem__fullName">{fullName}</p>
                <p className="HockeyCardMenuItem__position">{position.name}</p>
              </div>

              <span className="HockeyCardMenuItem__jerseyNumber">
                {jerseyNumber}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HockeyCardMenu;
