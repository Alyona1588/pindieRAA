'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsListSection/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function TDSsGames() {
  const TDSsGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {TDSsGames ? (
        <CardsListSection id="TDS" title="ТДС" data={TDSsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}