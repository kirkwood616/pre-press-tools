import styles from "./ButtonArrow.module.css";

interface Props {
  direction: "up" | "down" | "left" | "right";
  index: number;
  clickFunction: (index: number) => void;
}

function ButtonArrow({ direction, index, clickFunction }: Props) {
  return (
    <button className={styles.ButtonArrow} onClick={() => clickFunction(index)}>
      <i className={`${styles.arrow} ${styles[direction]}`}></i>
    </button>
  );
}

export default ButtonArrow;
