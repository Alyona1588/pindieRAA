'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function Shooter() {
  const shootersGames = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      {shootersGames ? (
        <CardsList id="shooter" title="Шуттеры" data={shootersGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}