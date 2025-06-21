import styles from "./ButtonArrow.module.css";

interface Props {
  direction: "up" | "down" | "left" | "right";
  clickFunction?: () => void;
}

function ButtonArrow({ direction, clickFunction }: Props) {
  return (
    <button className={styles.ButtonArrow} onClick={clickFunction}>
      <i className={`${styles.arrow} ${styles[direction]}`}></i>
    </button>
  );
}

export default ButtonArrow;
