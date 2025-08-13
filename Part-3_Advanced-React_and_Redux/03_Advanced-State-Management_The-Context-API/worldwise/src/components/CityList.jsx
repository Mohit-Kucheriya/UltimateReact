import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

import { useCities } from "../contexts/CitiesContext";

import styles from "./CityList.module.css";

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the Map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
