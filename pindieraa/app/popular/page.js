import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Popular() {
  const popularGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "popular"
  );
console.log(popularGames);
  return (
    <main className="main">
      <CardsList id="popular" title="Популярные" data={popularGames} />
    </main>
  );
}