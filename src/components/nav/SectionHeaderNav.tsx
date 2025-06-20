import useLocationRoutes from "@/hooks/useLocationRoutes";
import type { Status } from "@/types/Imaging";
import { Link } from "react-router-dom";
import styles from "./SectionHeaderNav.module.css";

interface Props {
  sections: Status[];
  basePath: string;
}

function SectionHeaderNav({ sections, basePath }: Props) {
  const { isLocation, isPath } = useLocationRoutes();

  return (
    <div className={styles.SectionHeaderNav}>
      {sections.map((item, index) => (
        <Link to={item} key={item + index}>
          <button
            className={
              isPath(`/${basePath}/${item}`) || isLocation(item)
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

export default SectionHeaderNav;
