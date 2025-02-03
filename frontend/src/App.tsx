import "./reset.css";
import "./App.css";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails";
import PeopleDetails from "./pages/PeopleDetails";
import PlanetDetails from "./pages/PlanetDetails";
import SpeciesDetails from "./pages/SpeciesDetails";
import StarshipsDetails from "./pages/StarshipDetails";
import VehicleDetails from "./pages/VehicleDetails";

function App() {
  return (
    <div className="App">
      <Hero />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/:id" element={<FilmDetails />} />
        <Route path="/people/:id" element={<PeopleDetails />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
        <Route path="/species/:id" element={<SpeciesDetails />} />
        <Route path="/starships/:id" element={<StarshipsDetails />} />
        <Route path="/vehicles/:id" element={<VehicleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
