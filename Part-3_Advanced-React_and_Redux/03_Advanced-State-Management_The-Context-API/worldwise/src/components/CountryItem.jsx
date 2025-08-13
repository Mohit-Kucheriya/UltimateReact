import styles from "./CountryItem.module.css";
import FlagEmojiToPng from "./FlagEmojiToPng";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <FlagEmojiToPng flag={country.emoji} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
