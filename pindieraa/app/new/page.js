'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsListSection/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        // <CardsList id="new" title="Новые" data={newGames} />

        <CardsListSection id="new" title="Новые" data={newGames} /> 
      ) : (
        <Preloader />
      )}
    </main>
  );
} 