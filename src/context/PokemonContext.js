import { createContext, useReducer, useState } from "react";
import {
  PokemonReducer,
  RELEASE,
  CAPTURE,
  ADD_POKEMON,
  ADD_POKEMONS,
} from "./PokemonReducer";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const defaultState = {
    pokemons: [
      { id: 1, name: "Bulbasaur" },
      { id: 2, name: "Charmander" },
      { id: 3, name: "Squirtle" },
    ],
    capturedPokemons: [],
  };

  const [state, dispatch] = useReducer(PokemonReducer, defaultState);

  const { pokemons, capturedPokemons } = state;

  const capture = (pokemon) => {
    dispatch({ type: CAPTURE, pokemon });
  };

  const release = (pokemon) => {
    dispatch({ type: RELEASE, pokemon });
  };

  const addPokemon = (pokemon) => {
    dispatch({ type: ADD_POKEMON, pokemon });
  };

  const addPokemons = (pokemons) => {
    dispatch({ type: ADD_POKEMONS, pokemons });
  };
  const providerValue = {
    pokemons,
    capturedPokemons,
    capture,
    release,
    addPokemon,
    addPokemons,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};
