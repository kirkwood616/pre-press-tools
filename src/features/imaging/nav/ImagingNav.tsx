import AddNewOrder from "@/features/imaging/controls/AddNewOrder";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { imagingSections } from "@/types/Imaging";
import { Link } from "react-router-dom";
import styles from "./ImagingNav.module.css";

function ImagingNav() {
  const { isLocation, isPath } = useLocationRoutes();

  return (
    <div className={styles.ImagingNav}>
      {imagingSections.map((sectionName, index) => (
        <Link to={sectionName} key={`_${sectionName}_${index.toString()}`}>
          <button
            className={
              isPath(`/imaging/${sectionName}`) || isLocation(sectionName)
                ? styles.sectionActive
                : ""
            }
            type="button"
          >
            {sectionName.toUpperCase()}
          </button>
        </Link>
      ))}
      <AddNewOrder />
    </div>
  );
}

export default ImagingNav;
