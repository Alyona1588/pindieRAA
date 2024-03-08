import Styles from "./CardsList.module.css";
import { Card } from "../Card/Card";

import PopularCardsFragment from "./PopularCardsFragment";
import NewCardsFragment from "./NewCardsFragment";

export const CardsList = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {props.data.map((item) => {
          return (
            <li className={Styles["cards-list__item"]} key={item.id}>
              <a
                href={item.link}
                target="_blank"
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
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

//  <section className={Styles["list-section"]}>
//     <h2 className={Styles["list-section__title"]} id={props.id}>
//       {props.title}
//     </h2>
//     <ul className={Styles["cards-list"]}>
//       {props.children}

{
  /* {props.id === 'popular' && <PopularCardsFragment/>}  */
}
{
  /* {props.id === 'new' && <NewCardsFragment/>} */
}

//   </ul>
// </section>
//   );
// };
