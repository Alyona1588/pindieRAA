import Styles from './CategoryNotFound.module.css';
import {NotFoundImage} from './not-found.jsx';

export const CategoryNotFound = () => {
  return (
    <div className={Styles["not-found"]}>
      <NotFoundImage />
      <h2 className={Styles["not-found__text"]}>Такой категории не существует :(</h2>
    </div>
  )
};