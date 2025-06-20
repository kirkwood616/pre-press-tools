import styles from "@/pages/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.Home}>
      <Link to="/imaging">IMAGING</Link>
    </div>
  );
}

export default Home;
