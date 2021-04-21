/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { HockeyCard } from "components";
import { fetchPlayer, PlayerSelect } from "./9-utils";

type PlayerData = React.ComponentProps<typeof HockeyCard>["player"];

const Player: React.FC<{ playerId: number }> = (props) => {
  const [player, setPlayer] = React.useState<PlayerData | null>(null);

  // Your job is to fetch player data from NHL api using useEffect and fetchPlayer helper
  // Data should be fetched when playerId changes and is truthy.

  // TIP: useEffect function cannot be async function, so you need to define it separately
  // TIP: define async function inside useEffect to avoid pitfalls of having function as a dependency.
  // There are measures to counter that, but it's out of the scope of this lesson

  // 🔥 For extra point, set player as null when selected player is cleared,
  // otherwise last selected player remains visible

  // 🔥🔥🔥🔥 Fetching player can take a long time (here it is artificially slowed down since NHL
  // api is fast). Your job is to develop support for loading and error states. Uncomment below to get started.
  // const [status, setStatus] = React.useState<"success" | "error" | "loading">(
  //   "success"
  // );

  return player ? <HockeyCard player={player} /> : <div>Select player...</div>;
};

const App: React.FC<{ playerId: number }> = (props) => {
  const [selectedPlayerId, setSelectedPlayerId] = React.useState(0);

  return (
    <>
      <PlayerSelect value={selectedPlayerId} setValue={setSelectedPlayerId} />
      <div style={{ flex: 1 }}>
        <Player playerId={selectedPlayerId} />
      </div>
    </>
  );
};

export default App;
