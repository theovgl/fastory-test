import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Species } from "../types/species";
import styles from "./Page.module.css";

export default function SpeciesDetails() {
  const [data, setData] = useState<Species | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/species/${params.id}`)
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
      <h3>{data.name}</h3>
      <p>Classification: {data.classification}</p>
      <p>Designation: {data.designation}</p>
      <p>Average height: {data.average_height}</p>
      <p>Average lifespan: {data.average_lifespan}</p>
      <p>Eye colors: {data.eye_colors}</p>
      <p>Hair colors: {data.hair_colors}</p>
      <p>Skin colors: {data.skin_colors}</p>
      <p>Language: {data.language}</p>
    </div>
  );
}
