import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";


export default async function Shooter() {
  const shootersGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "shooter");

  return (
    <main className="main">
      <CardsList id="shooter" title="Шуттеры" data={shootersGames} />
    </main>
  );
}