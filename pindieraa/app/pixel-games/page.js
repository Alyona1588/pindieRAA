'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function Pixels() {
  const pixelsGames = useGetDataByCategory(endpoints.games, "pixel");
  return (
    <main className="main-inner">
      {pixelsGames ? (
        <CardsList id="pixel" title="Пиксель" data={pixelsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
} 