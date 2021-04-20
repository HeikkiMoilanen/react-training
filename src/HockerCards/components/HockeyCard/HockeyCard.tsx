import * as React from "react";
import { useRouteMatch } from "react-router-dom";

import { PlayerResponse } from "types/hockeyCards";
import { useFetch } from "hooks";
import { getNhlApiUrl } from "utils";
import { HockeyCard as HockeyCardComponent } from "components";

import "components/HockeyCard/HockeyCard.scss";

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

  return <HockeyCardComponent player={player} />;
};

export default HockeyCard;
