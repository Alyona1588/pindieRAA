import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Popular() {
  const popularGames = getGamesByCategory("popular");

  return (
    <main className="main">
      <CardsList id="popular" title="Популярные" data={popularGames} />
    </main>
  );
}
