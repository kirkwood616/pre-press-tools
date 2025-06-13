import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      <Link to="/imaging">IMAGING</Link>
    </div>
  );
}

export default Home;
