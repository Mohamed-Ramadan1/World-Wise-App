import { useCities } from "../../contexts/CitiesContext";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "../Spinners/Spinner";
import Message from "../Message/Message";
const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Adding Your first city by clicking on the city on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((countery) => (
        <CountryItem country={countery} key={countery.id} />
      ))}
    </ul>
  );
};

export default CountryList;
