import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Runners() {
  const pixelsGames = getGamesByCategory("pixel");

  return (
    <main className="main">
      <CardsList id="pixel" title="Пиксель" data={pixelsGames} />
    </main>
  );
}
