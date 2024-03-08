import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Runners() {
  const TDSsGames = getGamesByCategory("TDS");

  return (
    <main className="main">
      <CardsList id="TDS" title="ТДС" data={TDSsGames} />
    </main>
  );
}
