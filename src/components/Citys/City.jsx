import { useParams } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "../Spinners/Spinner";
import CityInformation from "./CityInformation";

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading) return <Spinner />;
  return <CityInformation currentCity={currentCity} />;
}

export default City;
