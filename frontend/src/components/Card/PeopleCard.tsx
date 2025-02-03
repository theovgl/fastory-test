import { People } from "../../types/people";

type PeopleCardProps = {
  people: People;
};

export default function PeopleCard({ people }: PeopleCardProps) {
  return (
    <>
      <div className="card">
        <h3>{people.name}</h3>
        <p>Birth Year: {people.birth_year}</p>
        <p>Gender: {people.gender}</p>
      </div>
    </>
  );
}
