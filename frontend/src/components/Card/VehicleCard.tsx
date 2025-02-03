import { Vehicle } from "../../types/vehicles";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <>
      <div className="card">
        <h3>{vehicle.name}</h3>
        <p>Model: {vehicle.model}</p>
        <p>Manufacturer: {vehicle.manufacturer}</p>
      </div>
    </>
  );
}
