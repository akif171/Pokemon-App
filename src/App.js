import "./App.css";
import Pokedex from "./components/Pokedex";
import PokemonForm from "./components/PokemonForm";
import PokemonsList from "./components/PokemonsList";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonsList />
        <Pokedex />
      </div>
      <PokemonForm />
    </PokemonProvider>
  );
}

export default App;
