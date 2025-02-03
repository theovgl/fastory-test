import styles from "./Card.module.css";
import { Film } from "../../types/film";
import { People } from "../../types/people";
import { Planet } from "../../types/planet";
import { Species } from "../../types/species";
import { Starship } from "../../types/starship";
import { Vehicle } from "../../types/vehicles";
import PeopleCard from "./PeopleCard";
import FilmCard from "./FilmCard";
import PlanetCard from "./PlanetCard";
import SpeciesCard from "./SpeciesCard";
import StarshipCard from "./StarshipCard";
import VehicleCard from "./VehicleCard";

interface Props {
  information: People | Film | Planet | Species | Starship | Vehicle;
  category: string;
}

export default function Card({ information, category }: Props) {
  return (
    <div className={styles.card}>
      {(() => {
        switch (category) {
          case "people":
            return <PeopleCard people={information as People} />;
          case "films":
            return <FilmCard film={information as Film} />;
          case "planets":
            return <PlanetCard planet={information as Planet} />;
          case "species":
            return <SpeciesCard species={information as Species} />;
          case "starships":
            return <StarshipCard starship={information as Starship} />;
          case "vehicles":
            return <VehicleCard vehicle={information as Vehicle} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
