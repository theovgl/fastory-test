import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { People } from "../types/people";
import styles from "./Page.module.css";

export default function PeopleDetails() {
  const [data, setData] = useState<People | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/people/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [params.id]);

  if (loading)
    return (
      <div className={styles.page_content}>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className={styles.page_content}>
        <p>{error.message}</p>
      </div>
    );

  if (!data)
    return (
      <div className={styles.page_content}>
        <p>People not found</p>
      </div>
    );

  return (
    <div className={styles.page_content}>
      <h2 className={styles.details_title}>{data.name}</h2>
      <p>Birth year: {data.birth_year}</p>
      <p>Eye color: {data.eye_color}</p>
      <p>gender: {data.gender}</p>
      <p>Hair color: {data.hair_color}</p>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Skin color: {data.skin_color}</p>
    </div>
  );
}
