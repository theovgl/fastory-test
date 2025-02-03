import { SWAPIResponse } from "../../types/response";
import Card from "../Card/Card";
import styles from "./SearchCategory.module.css";

interface SearchCategoryProps {
  swapiCategory: SWAPIResponse;
}

export default function SearchCategory({ swapiCategory }: SearchCategoryProps) {
  if (swapiCategory.count > 0) {
    return (
      <div className={styles.searchCategory}>
        <h2 className={styles.searchCatergoy_title}>
          {swapiCategory.category}
        </h2>
        <ul className={styles.cardList}>
          {swapiCategory.results.map((result) => (
            <Card
              key={result.url}
              information={result}
              category={swapiCategory.category}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
}
