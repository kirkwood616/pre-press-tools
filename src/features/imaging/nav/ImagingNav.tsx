import AddNewOrder from "@/features/imaging/controls/AddNewOrder";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { sections } from "@/types/Imaging";
import { Link } from "react-router-dom";
import styles from "./ImagingNav.module.css";

function ImagingNav() {
  const { isLocation, isPath } = useLocationRoutes();

  return (
    <div className={styles.ImagingNav}>
      {sections.map((item, index) => (
        <Link to={item} key={item + index}>
          <button
            className={
              isPath(`/imaging/${item}`) || isLocation(item)
                ? styles.sectionActive
                : ""
            }
            type="button"
          >
            {item.toUpperCase()}
          </button>
        </Link>
      ))}
      <AddNewOrder />
    </div>
  );
}

export default ImagingNav;
