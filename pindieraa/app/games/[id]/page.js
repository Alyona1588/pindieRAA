"use client";
import Styles from "./Game.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { getNormalizedGameDataById, isResponseOk } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function GamePage(props) {
  const router = useRouter();
  const [game, setGame] = useState(""); 
  const [preloaderVisible, setPreloaderVisible] = useState(true); 
  
  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(
        endpoints.games,
        props.params.id
      );
      console.log(game);
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }

    fetchData();
  }, []);

  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles["game"]}>
            <iframe className={Styles["game__iframe"]} src={game.link}></iframe>
          </section>
          <section className={Styles["about"]}>
            <h2 className={Styles["about__title"]}>{game.title}</h2>
            <div className={Styles["about__content"]}>
              <p className={Styles["about__description"]}>{game.description}</p>
              <div className={Styles["about__author"]}>
                <p>
                  Автор:
                  <span className={Styles["about__accent"]}>
                    {game.developer}
                  </span>
                </p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>
                За игру уже проголосовали:
                <span className={Styles["about__accent"]}>
                  {game.users.length}
                </span>
              </p>

              <button
                type="button"
                onClick={() => router.push("/AuthForm")}
                className={`button ${Styles["about__vote-button"]}`}
              >
                Голосовать
              </button>
            </div>
          </section>
        </>
      ) : preloaderVisible ? (
        <Preloader />
    ) : (
        <section className={Styles["game"]}>
          <GameNotFound />
        </section>
      )}
    </main>
  );
}
