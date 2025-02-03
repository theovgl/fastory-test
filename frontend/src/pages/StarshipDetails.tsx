import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Starship } from "../types/starship";
import styles from "./Page.module.css";

export default function StarshipsDetails() {
  const [data, setData] = useState<Starship | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/starships/${params.id}`)
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
      <p>Model: {data.model}</p>
      <p>Starship class: {data.starship_class}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Cost in credits: {data.cost_in_credits}</p>
      <p>Length: {data.length}</p>
      <p>Crew: {data.crew}</p>
      <p>Passengers: {data.passengers}</p>
      <p>Max atmosphering speed: {data.max_atmosphering_speed}</p>
      <p>Hyperdrive rating: {data.hyperdrive_rating}</p>
      <p>MGLT: {data.MGLT}</p>
      <p>Cargo capacity: {data.cargo_capacity}</p>
      <p>Consumables: {data.consumables}</p>
    </div>
  );
}
