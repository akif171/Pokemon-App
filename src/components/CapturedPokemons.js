import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const CapturedPokemons = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Captured Pokemons</h2>
      {pokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <span>{pokemon.name}</span>
          <button onClick={() => release(pokemon)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default CapturedPokemons;
