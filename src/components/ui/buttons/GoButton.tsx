import type { MouseEvent, ReactNode } from "react";
import styles from "./GoButton.module.css";

type ButtonType = "primary" | "secondary" | "tertiary" | "cancel";

interface Props {
  children: ReactNode;
  type: ButtonType;
  clickFunction?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function GoButton({ children, type, clickFunction }: Props) {
  return (
    <button
      className={`${styles.GoButton} ${styles[type]}`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
}

export default GoButton;
