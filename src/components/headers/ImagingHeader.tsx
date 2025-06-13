import { Link } from "react-router-dom";
import useLocationRoutes from "../../hooks/useLocationRoutes";
import styles from "./ImagingHeader.module.css";

const sections = ["queue", "imaged", "washed"];

function ImagingHeader() {
  const { isPath, isSubPath } = useLocationRoutes();

  return (
    <div className={styles.ImagingHeader}>
      {sections.map((item, index) => (
        <Link to={item} key={item + index}>
          <button
            className={
              isPath(`/imaging/${item}`) || isSubPath(`/imaging/${item}`)
                ? styles.active
                : ""
            }
            type="button"
          >
            {item.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default ImagingHeader;
