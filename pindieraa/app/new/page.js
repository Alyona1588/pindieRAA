import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <CardsList id="new" title="Новинки" data={newGames} />
    </main>
  );
}
