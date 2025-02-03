import { Species } from "../../types/species";

type SpeciesCardProps = {
  species: Species;
};

export default function SpeciesCard({ species }: SpeciesCardProps) {
  return (
    <div className="card">
      <h3>{species.name}</h3>
      <p>Classification: {species.classification}</p>
      <p>Designation: {species.designation}</p>
    </div>
  );
}
