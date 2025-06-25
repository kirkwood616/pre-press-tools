import type { MouseEventHandler } from "react";
import styles from "./ButtonCloseX.module.css";

interface Props {
  clickFunction: MouseEventHandler<HTMLButtonElement>;
}

function ButtonCloseX({ clickFunction }: Props) {
  return (
    <button className={styles.ButtonCloseX} onClick={clickFunction}></button>
  );
}

export default ButtonCloseX;
