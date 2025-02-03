import { Film } from "../../types/film";

type FilmCardProps = {
  film: Film;
};

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <div className="card">
      <h3>{film.title}</h3>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.release_date}</p>
    </div>
  );
}
