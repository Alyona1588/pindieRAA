// import styles from "./page.module.css";

import { getGamesByCategory } from "./data/data-utils.js";
import { Banner } from "./components/Banner/banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";
// import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment";
// import { NewCardsFragment } from "./components/CardsList/NewCardsFragment";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
