import { Starship } from "../../types/starship";

type StarshipCardProps = {
  starship: Starship;
};

export default function StarshipCard({ starship }: StarshipCardProps) {
  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
    </div>
  );
}
