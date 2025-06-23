import type { MouseEvent } from "react";
import styles from "./ButtonAddPlus.module.css";

interface Props {
  clickFunction?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function ButtonAddPlus({ clickFunction }: Props) {
  return (
    <button className={styles.ButtonAddPlus} onClick={clickFunction}></button>
  );
}

export default ButtonAddPlus;
