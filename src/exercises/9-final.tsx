/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { HockeyCard } from "components";
import { fetchPlayer, PlayerSelect } from "./9-utils";

type PlayerData = React.ComponentProps<typeof HockeyCard>["player"];

const Player: React.FC<{ playerId: number }> = (props) => {
  const { playerId } = props;

  const [player, setPlayer] = React.useState<PlayerData | null>(null);

  React.useEffect(() => {
    if (!playerId) {
      return;
    }

    const fetchData = async () => {
      const player = await fetchPlayer(playerId);

      setPlayer(player);
    };

    fetchData();
  }, [playerId]);

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
