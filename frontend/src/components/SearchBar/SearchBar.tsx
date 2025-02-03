import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { useSearch } from "../../hooks/useSearch";
import SearchCategory from "../SearchCategory/SearchCategory";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { results, loading, error } = useSearch(search);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <>
      <input
        className={styles.searcBarInput}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {results.length > 0 &&
        results.map((result) => (
          <SearchCategory key={result.category} swapiCategory={result} />
        ))}
    </>
  );
}
