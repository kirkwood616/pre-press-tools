import GoButton from "@/components/ui/buttons/GoButton";
import styles from "./ConfirmChanges.module.css";

function ConfirmChanges() {
  return (
    <div className={styles.ConfirmChanges}>
      <GoButton label="CANCEL" type="cancel" />
      <GoButton label="SAVE" type="primary" />
    </div>
  );
}

export default ConfirmChanges;
