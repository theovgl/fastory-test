import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useSearch } from "../../hooks/useSearch";
import { Link } from "react-router";
import { Film } from "../../types/film";
import { People } from "../../types/people";
import { Planet } from "../../types/planet";
import { Species } from "../../types/species";
import { Starship } from "../../types/starship";
import { Vehicle } from "../../types/vehicles";
import StarwarsCrawl from "../StarwarsCrawl/StarwarsCrawl";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { results } = useSearch(search);

  const getName = (
    item: People | Film | Planet | Species | Starship | Vehicle,
  ) => {
    if ("name" in item) {
      return item.name;
    } else if ("title" in item) {
      return item.title;
    }
  };

  const getItemId = (
    item: People | Film | Planet | Species | Starship | Vehicle,
  ) => {
    const url = item.url;

    const id = url.split("/").filter(Boolean).pop();
    console.log(id);
    return id;
  };

  return (
    <>
      <input
        className={styles.searcBarInput}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <StarwarsCrawl>
        {results.map((result) => (
          <>
            <h3>{result.category}</h3>
            <div className={styles.links}>
              {result.results.map((item) => (
                <Link
                  className={styles.link}
                  to={`/${result.category}/${getItemId(item)}`}
                >
                  {getName(item)}
                </Link>
              ))}
            </div>
          </>
        ))}
      </StarwarsCrawl>
    </>
  );
}
