import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Planet } from "../types/planet";
import styles from "./Page.module.css";

export default function PlanetDetails() {
  const [data, setData] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/planets/${params.id}`)
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
      <p>Diameter: {data.diameter}</p>
      <p>Rotation period: {data.rotation_period}</p>
      <p>Orbital period: {data.orbital_period}</p>
      <p>Gravity: {data.gravity}</p>
      <p>Population: {data.population}</p>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
      <p>Surface water: {data.surface_water}</p>
    </div>
  );
}
