import { useState, useEffect } from "react";

import PokemonList from "../PokemonList/PokemonList";
import styles from "./Main.module.css";
import { getPokemons } from "./../../service/pokemon.service";
import Modal from "../Modal/Modal";

// 1
export const Main = () => {
  // state variable
  const [pokemons, setPokemons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState("");

  const getPokemonData = () => {
    const data = getPokemons();
    setPokemons(data);
  };

  // logic/ business logic
  const onClickHandler = (name) => {
    const pokemonClone = [...pokemons];
    const index = pokemonClone.findIndex((p) => p.name === name);

    pokemonClone[index].isSeen = !pokemonClone[index].isSeen;

    setPokemons(pokemonClone);
  };

  const onPokemonInfo = (info) => {
    setShowModal(true);
    setPokemonInfo(info);
  };

  const onModalClose = () => setShowModal(false);

  // when main is loaded/rendered to the screen for the first time
  // get the pokemon list
  useEffect(() => {
    getPokemonData();
  }, []);
  // when the dependency list is empty, this useEffect is going be called just 1 time
  // when the component is rendered.

  const seenPokemon = pokemons.filter((p) => p.isSeen);
  const unSeenPokemon = pokemons.filter((p) => !p.isSeen);

  return (
    <main className={styles.main}>
      {showModal && (
        <Modal onClose={onModalClose}>
          <span>{pokemonInfo}</span>
        </Modal>
      )}

      <PokemonList
        pokemons={seenPokemon}
        onClickHandler={onClickHandler}
        onPokemonInfo={onPokemonInfo}
      />

      <PokemonList
        pokemons={unSeenPokemon}
        onClickHandler={onClickHandler}
        onPokemonInfo={onPokemonInfo}
      />
    </main>
  );
};
