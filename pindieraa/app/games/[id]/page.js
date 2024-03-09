"use client";
import Styles from "./Game.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import {
  getJWT,
  getMe,
  getNormalizedGameDataById,
  isResponseOk,
  vote,
} from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { checkIfUserVoted } from "@/app/api/api-utils";


export default function GamePage(props) {
  const router = useRouter();
  const [game, setGame] = useState("");
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  const [isVoted, setIsVoted] = useState(false);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState("null");

  useEffect(() => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true);
          setCurrentUser(userData);
        } else {
          setIsAuthorized(false);
          removeJWT();
        }
      });
    }
  });

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

  useEffect(() => {
    if (currentUser && game) {
      setIsVoted(checkIfUserVoted(game, currentUser.id));
    } else {
      setIsVoted(false);
    }
    // return checkIfUserVoted;
  }, [currentUser, game]);

  const handleVote = async () => {
    const jwt = getJWT();
  let usersIdArray = game.users.length
      ? game.users.map((user) => user.id)
    : [];
  usersIdArray.push(currentUser.id);
  const response = await vote(
      `${endpoints.games}/${game.id}`,
    jwt,
    usersIdArray
  );
  if (isResponseOk(response)) {
      setIsVoted(true);
    setGame(() => {
        return {
          ...game,
        users: [...game.users, currentUser],
      };
    });
  }
};





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

              {/* <button
                disabled={!isAuthorized}
                className={`button ${Styles["about__vote-button"]}`}
                type="button"
                onClick={() => router.push("/AuthForm")}
              >
                Голосовать
              </button> */}
             
              <button
                disabled={!isAuthorized || isVoted}
                className={`button ${Styles["about__vote-button"]}`}
                onClick={handleVote}
              >
                {isVoted ? "Голос учтён" : "Голосовать"}
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
