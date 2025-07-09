import useLocationRoutes from "@/hooks/useLocationRoutes";
import { imagingStatus } from "@/types/Imaging";
import styles from "./UpdateStatus.module.css";

interface UpdateStatusMenuProps {
  isOpen: boolean;
}

function UpdateStatusMenu({ isOpen }: UpdateStatusMenuProps) {
  const { getSectionNoParams } = useLocationRoutes();
  const sections = imagingStatus.filter(
    (section) => section !== getSectionNoParams()
  );

  return (
    <div className={styles.statusMenu}>
      <ul>
        {isOpen
          ? sections.map((status, index) => (
              <li className={styles.statusItem} key={status + index.toString()}>
                {status.toUpperCase()}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default UpdateStatusMenu;
