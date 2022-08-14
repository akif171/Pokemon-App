import React, { useState, useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  console.log(pokemons, addPokemons);
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      addPokemons(data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="pokemonlist">
      <h2>Pokemons List</h2>
      {pokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <span>{pokemon.name}</span>
          <button onClick={() => capture(pokemon)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonsList;
