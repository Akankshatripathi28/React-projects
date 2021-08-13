import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon, onClickHandler, onPokemonInfo }) => {
  return (
    <div onClick={onClickHandler} className={styles.pokemon}>
      <span>{pokemon.name}</span>
      <div
        className={styles.arrow}
        onClick={(e) => {
          e.stopPropagation();
          onPokemonInfo();
        }}
      ></div>
    </div>
  );
};

export default Pokemon;
