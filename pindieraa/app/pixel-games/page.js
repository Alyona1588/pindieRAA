import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Pixels() {
  const pixelsGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "pixel");

  return (
    <main className="main">
      <CardsList id="pixel" title="Пиксель" data={pixelsGames} />
    </main>
  );
}
