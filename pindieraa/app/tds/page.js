import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Runners() {
  const TDSsGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "TDS");

  return (
    <main className="main">
      <CardsList id="TDS" title="ТДС" data={TDSsGames} />
    </main>
  );
}
