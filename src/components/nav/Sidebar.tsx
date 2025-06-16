import { Link } from "react-router-dom";
import useLocationRoutes from "../../hooks/useLocationRoutes";
import HomeIcon from "../../icons/HomeIcon";
import ImageIcon from "../../icons/ImageIcon";
import styles from "./Sidebar.module.css";

const navItems = [
  { name: "home", image: <HomeIcon size="2rem" />, path: "/" },
  { name: "imaging", image: <ImageIcon size="2rem" />, path: "imaging/queue" },
];

function Sidebar() {
  const { isPath, isSubPath } = useLocationRoutes();
  return (
    <aside className={styles.Sidebar}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.logo}></div>
          <h1>CMT</h1>
        </div>
        <nav className={styles.menu}>
          {navItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <button
                className={
                  isPath(item.path) || isSubPath(item.name) ? styles.active : ""
                }
                type="button"
              >
                <span>{item.image}</span>
                <p>{item.name}</p>
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
