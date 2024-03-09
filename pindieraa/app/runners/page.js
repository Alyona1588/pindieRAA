'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function Runners() {
  const runnersGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      {runnersGames ? (
        <CardsList id="runner" title="Ранеры" data={runnersGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}