import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "../Spinners/Spinner";
import Message from "../Message/Message";
const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Adding Your first city by clicking on the city on the map" />
    );
  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CountryItem country={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CountryList;
