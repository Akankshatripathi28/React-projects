import styles from "./PokemonList.module.css";
import Pokemon from "./../Pokemon/Pokemon";

const PokemonList = ({ pokemons, onClickHandler, onPokemonInfo }) => {
  return (
    <div className={styles["pokemon-list"]}>
      {pokemons.map((pokemon) => {
        return (
          <Pokemon
            pokemon={pokemon}
            onClickHandler={() => {
              onClickHandler(pokemon.name);
            }}
            onPokemonInfo={() => {
              onPokemonInfo(pokemon.info);
            }}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
