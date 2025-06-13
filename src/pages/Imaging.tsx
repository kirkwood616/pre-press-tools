import { Outlet } from "react-router-dom";
import ImagingHeader from "../components/headers/ImagingHeader";
import PageHeader from "../components/headers/PageHeader";
import styles from "./Imaging.module.css";

function Imaging() {
  return (
    <>
      <PageHeader title={"IMAGING"} />
      <ImagingHeader />
      <div className={styles.Imaging}>
        <Outlet />
      </div>
    </>
  );
}

export default Imaging;
