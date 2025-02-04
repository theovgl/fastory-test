import { Link } from "react-router";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.hero_title}>
        <Link to="/">Star Wars Rebels Alliance Search System</Link>
      </h1>
    </div>
  );
}
