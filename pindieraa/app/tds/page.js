'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function TDSsGames() {
  const TDSsGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {TDSsGames ? (
        <CardsList id="TDS" title="ТДС" data={TDSsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}