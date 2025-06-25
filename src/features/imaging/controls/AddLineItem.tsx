import ButtonAddPlus from "@/components/ui/buttons/ButtonAddPlus";
import styles from "./AddLineItem.module.css";

interface AddLineItemProps {
  label: string;
  onItemClick: () => void;
}

function AddLineItem({ label, onItemClick }: AddLineItemProps) {
  return (
    <div className={styles.AddLineItem}>
      <ButtonAddPlus clickFunction={onItemClick} /> <span>{label}</span>
    </div>
  );
}

export default AddLineItem;
