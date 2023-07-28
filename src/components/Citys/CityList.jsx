import styles from "./CityList.module.css";
import Spinner from "../Spinners/Spinner";
import Message from "../Message/Message";
import CityItem from "./CityItem";
const CityList = ({ cities, isLoading }) => {
  //condetional Rendering
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Adding Your first city by clicking on the city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
