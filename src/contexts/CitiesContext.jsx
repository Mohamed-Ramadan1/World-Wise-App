import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

const CitesProvider = ({ children }) => {
  const [cities, setCitiyes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCityes = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCitiyes(data);
      } catch (error) {
        alert("Error while featching the data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCityes();
  }, []);

  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("Error while featching the data");
    } finally {
      setIsLoading(false);
    }
  };

  async function createCity(newCity) {
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCitiyes((cities) => [...cities, data]);
    } catch (error) {
      alert("Error for loading the data");
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the cities provider");
  return context;
};

export { CitesProvider, useCities };
