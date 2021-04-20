import * as React from "react";
import { Link } from "react-router-dom";

import { TeamResponse } from "types/hockeyCards";
import { useFetch } from "hooks";
import { getNhlApiUrl } from "utils";
import PlayerImage from "components/PlayerImage";

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
    <ul className="hockey-card-menu">
      {team.roster.roster.map((player) => {
        const { person, jerseyNumber, position } = player;
        const { id, fullName } = person;

        return (
          <li className="hockey-card-menu-item" key={id}>
            <Link
              className="hockey-card-menu-item__link"
              to={`/hockey-cards/${id}`}
            >
              <PlayerImage
                className="hockey-card-menu-item__image"
                size="small"
                id={id}
                fullName={fullName}
              />

              <div className="hockey-card-menu-item__nameWrapper">
                <p className="hockey-card-menu-item__fullName">{fullName}</p>
                <p className="hockey-card-menu-item__position">
                  {position.name}
                </p>
              </div>

              <span className="hockey-card-menu-item__jerseyNumber">
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
