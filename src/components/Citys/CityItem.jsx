import { formatDate } from "../../Helper/formatDate";
import { useCities } from "../../contexts/CitiesContext";
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
const CityItem = ({ city }) => {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const { deleteCity } = useCities();
  const handelClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handelClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
