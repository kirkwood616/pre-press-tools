import { signOut } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import useAuthCheck from "../../hooks/useAuthCheck";
import useLocationRoutes from "../../hooks/useLocationRoutes";
import HomeIcon from "../../icons/HomeIcon";
import ImageIcon from "../../icons/ImageIcon";
import LogOut from "../../icons/LogOut";
import { getFirstLetter, removeAtAndAddress } from "../../utils/StringUtils";
import styles from "./Sidebar.module.css";

const navItems = [
  { name: "home", image: <HomeIcon size="2rem" />, path: "/" },
  { name: "imaging", image: <ImageIcon size="2rem" />, path: "imaging/queue" },
];

function Sidebar() {
  const { user, checkingAuth } = useAuthCheck();
  const { isPath, isSubPath } = useLocationRoutes();
  const [isLogOutActive, setIsLogOutActive] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  if (checkingAuth) return <h1>LOADING</h1>;
  return (
    <aside className={styles.Sidebar}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div
            className={styles.logo}
            onClick={() => setIsLogOutActive(!isLogOutActive)}
          >
            {getFirstLetter(user!.email!).toUpperCase()}
          </div>
          <span>{removeAtAndAddress(user!.email!)}</span>
          <div
            className={isLogOutActive ? styles.logoutActive : styles.logout}
            onClick={logout}
          >
            <LogOut size={"1.75rem"} fill={"white"} />
            LOGOUT
          </div>
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
