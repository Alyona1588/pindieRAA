import Styles from "./CardsListSection.module.css";
import { Card } from "../Card/Card";
import Link from "next/link";

export const CardsList = (props) => {
  return (
    <ul className={Styles["cards-list"]}>
      {props.data.map((item) => {
        return (
          <li className={Styles["cards-list__item"]} key={item.id}>
            <Link
              href={`/games/${item.id}`}
              className={Styles["card-list__link"]}
            >
              <Card {...item} />
              {/* Это  Спред - подключает сразу весь массив
                <Card
                            title={item.title}
                            developer={item.developer}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            users={item.users}
                        /> */}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
