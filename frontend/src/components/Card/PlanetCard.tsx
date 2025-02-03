import { Planet } from "../../types/planet";

type PlanetCardProps = {
  planet: Planet;
};

export default function PlanetCard({ planet }: PlanetCardProps) {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population: {planet.population}</p>
      <p>Climate: {planet.climate}</p>
    </div>
  );
}
