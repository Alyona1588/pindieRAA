import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Runners() {
  const runnersGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "runner");
console.log(runnersGames);
  return (
    <main className="main">
      <CardsList id="runner" title="Ранеры" data={runnersGames} />
    </main>
  );
}