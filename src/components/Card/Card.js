import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img
          src={props.imgsrc}
          alt="seriesPoster"
          className={styles.card__Name}
        />
        <div className={styles.card__info}>
          <span className={styles.card__category}>{props.title}</span>
          <h3 className={styles.card_title}>{props.sname}</h3>
          <a href="#" target="_blank">
            <button>WATCH NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
