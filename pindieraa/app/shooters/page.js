import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Runners() {
  const shootersGames = getGamesByCategory("shooter");

  return (
    <main className="main">
      <CardsList id="shooter" title="Шуттеры" data={shootersGames} />
    </main>
  );
}
