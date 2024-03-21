'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsListSection/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Shooter() {
  const shootersGames = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      {shootersGames ? (
        <CardsListSection id="shooter" title="Шуттеры" data={shootersGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}