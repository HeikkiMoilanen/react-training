import * as React from "react";

import { TeamResponse } from "types/hockeyCards";
import { useFetch } from "hooks";
import { getNhlApiUrl } from "utils";

import { HockeyCardMenu } from "components";

const HockeyCardMenuContainer: React.FC<{ teamId: number }> = (props) => {
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

  return <HockeyCardMenu team={team} />;
};

export default HockeyCardMenuContainer;
