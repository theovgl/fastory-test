import { Link } from "react-router";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1>
        <Link to="/" className={styles.hero_title}>
          Star Wars Rebels Alliance Search System
        </Link>
      </h1>
    </div>
  );
}
