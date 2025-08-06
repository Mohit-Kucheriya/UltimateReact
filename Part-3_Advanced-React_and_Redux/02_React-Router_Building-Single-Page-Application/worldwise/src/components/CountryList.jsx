import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

import styles from "./CountryList.module.css";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the Map" />;

  const countries = cities.reduce((arr, currCountry) => {
    if (!arr.map((c) => c.country).includes(currCountry.country)) {
      return [
        ...arr,
        { country: currCountry.country, emoji: currCountry.emoji },
      ];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
