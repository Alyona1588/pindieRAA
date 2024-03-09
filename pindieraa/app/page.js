// import styles from "./page.module.css";

// import { getGamesByCategory } from "./data/data-utils.js";
// import { Banner } from "./components/Banner/banner";
// import { CardsList } from "./components/CardsList/CardsList";
// import { Promo } from "./components/Promo/Promo";

// export default function Home() {
//   const popularGames = getGamesByCategory("popular");
//   const newGames = getGamesByCategory("new");

//   return (
//     <main className="main">
//       <Banner />
//       <CardsList id="popular" title="Популярные" data={popularGames} />
//       <CardsList id="new" title="Новинки" data={newGames} />
//       <Promo />
//     </main>
//   );
// }

"use client";
import styles from "./page.module.css";
import { getGamesByCategory } from "./data/data-utils";
import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";
import { useEffect } from "react";
// import { useEffect } from "react";
// import { getData } from "./api/api-utils";
// import { endpoints } from "./api/config";



export default function Home() {
 
 
  // Загрузили игры из интренета
 
  // useEffect(() => {
  //   const getData = async (url) => {
  //     try {
  //       const response = await fetch(url);
  //       if (response.status !== 200) {
  //         throw new Error("Ошибка получения данных");
  //       }
  //       const data = await response.json();
  //       // Вывели загруженные данные в консоль 
  //       console.log(data);
  //       return data;
  //     } catch (error) {
  //       return error;
  //     }
  //   };
  //   getData("https://api-code-2.practicum-team.ru/games");
  // }, []);

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
