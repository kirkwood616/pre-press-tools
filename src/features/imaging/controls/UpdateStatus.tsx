import GoButton from "@/components/ui/buttons/GoButton";
import UpdateStatusMenu from "@/features/imaging/controls/UpdateStatusMenu";
import { useState } from "react";
import styles from "./UpdateStatus.module.css";

export default function UpdateStatus() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.UpdateStatus}>
      <GoButton
        type={"tertiary"}
        clickFunction={() => setIsOpen((prev) => !prev)}
      >
        UPDATE STATUS
      </GoButton>
      {isOpen && <UpdateStatusMenu isOpen />}
    </div>
  );
}
