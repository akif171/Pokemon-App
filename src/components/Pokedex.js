import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      {capturedPokemons.map((pokemon) => {
        return <div key={`${pokemon.id}-${pokemon.name}`}>
            <span>{pokemon.name}</span>
            <button onClick={()=> release(pokemon)}>-</button>
        </div>;
      })}
    </div>
  );
};

export default Pokedex;
