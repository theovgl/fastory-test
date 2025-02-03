import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Film } from "../types/film";
import styles from "./Page.module.css";

export default function FilmDetails() {
  const [data, setData] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/films/${params.id}`)
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>Film not found</p>;

  return (
    <div>
      <h2 className={styles.details_title}>{data.title}</h2>
      <p>Episode ID: {data.episode_id}</p>
      <p>Director: {data.director}</p>
      <p>Producer: {data.producer}</p>
      <p>Release Date: {data.release_date}</p>
      <p>Opening Crawl: {data.opening_crawl}</p>
    </div>
  );
}
