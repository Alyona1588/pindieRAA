import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function shooters() {
  const runnersGames = getGamesByCategory("runner");

  return (
    <main className="main">
      <CardsList id="runner" title="Ранеры" data={runnersGames} />
    </main>
  );
}
