"use client";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { endpoints } from "./api/config";
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./components/Preloader/Preloader";

export default function Home() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className="main">
      <Banner />
      {newGames ? (<CardsListSection id="new" title="Новые" data={newGames} type="slider"/>) : (<Preloader />)}
      {popularGames ? (<CardsListSection id="popular" title="Популярные" data={popularGames} type="slider"/>) : (<Preloader />)}
      <Promo />
    </main>
  );
}
