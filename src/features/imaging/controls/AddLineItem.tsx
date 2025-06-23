import ButtonAddPlus from "@/components/ui/buttons/ButtonAddPlus";
import type { MouseEvent } from "react";
import styles from "./AddLineItem.module.css";

interface Props {
  label: string;
  clickFunction?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function AddLineItem({ label }: Props) {
  return (
    <div className={styles.AddLineItem}>
      <ButtonAddPlus /> <span>{label}</span>
    </div>
  );
}

export default AddLineItem;
