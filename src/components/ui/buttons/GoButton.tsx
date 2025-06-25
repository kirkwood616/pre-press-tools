import type { MouseEvent } from "react";
import styles from "./GoButton.module.css";

type ButtonType = "primary" | "secondary" | "cancel";

interface Props {
  label: string;
  type: ButtonType;
  clickFunction?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function GoButton({ label, type, clickFunction }: Props) {
  return (
    <button
      className={`${styles.GoButton} ${styles[type]}`}
      onClick={clickFunction}
    >
      {label}
    </button>
  );
}

export default GoButton;
