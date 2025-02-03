import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Vehicle } from "../types/vehicles";
import styles from "./Page.module.css";

export default function VehicleDetails() {
  const [data, setData] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/vehicles/${params.id}`)
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
      <p>Vehicle class: {data.vehicle_class}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Length: {data.length}</p>
      <p>Cost in credits: {data.cost_in_credits}</p>
      <p>Crew: {data.crew}</p>
      <p>Passengers: {data.passengers}</p>
      <p>Max atmosphering speed: {data.max_atmosphering_speed}</p>
      <p>Cargo capacity: {data.cargo_capacity}</p>
      <p>Consumables: {data.consumables}</p>
    </div>
  );
}
