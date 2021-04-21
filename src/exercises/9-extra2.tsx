import * as React from "react";

import { HockeyCard } from "components";
import { fetchPlayer, PlayerSelect } from "./9-utils";

type PlayerData = React.ComponentProps<typeof HockeyCard>["player"];

const Player: React.FC<{ playerId: number }> = (props) => {
  const { playerId } = props;

  const [player, setPlayer] = React.useState<PlayerData | null>(null);
  const [status, setStatus] = React.useState<"success" | "error" | "loading">(
    "success"
  );

  React.useEffect(() => {
    if (!playerId) {
      setStatus("success");
      setPlayer(null);
      return;
    }

    const fetchData = async () => {
      setStatus("loading");
      try {
        const player = await fetchPlayer(playerId);

        setPlayer(player);
        setStatus("success");
      } catch (error) {
        setPlayer(null);
        setStatus("error");
      }
    };

    fetchData();
  }, [playerId]);

  if (status === "error") {
    return <div>Error loading player...</div>;
  }

  if (status === "loading") {
    return <div>Fetching player...</div>;
  }

  if (!player) {
    return <div>Select player...</div>;
  }

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
