import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { generateID } from "../utils/GenerateID";

const PokemonForm = () => {
  const { addPokemon } = useContext(PokemonContext);

  const [pokemonName, setPokemonName] = useState();
  const handleNameOnChange = (e) => setPokemonName(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPokemon({
      id: generateID(),
      name: pokemonName,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Pokemmon Name"
        onChange={handleNameOnChange}
      />
      <input type="submit" value="ADD" />
    </form>
  );
};

export default PokemonForm;
