import { Outlet } from "react-router-dom";
import PageHeader from "../components/headers/PageHeader";
import SectionHeaderNav from "../components/nav/SectionHeaderNav";
import useLocationRoutes from "../hooks/useLocationRoutes";
import { sections } from "../utils/TestData";
import styles from "./Imaging.module.css";

function Imaging() {
  const { idParams } = useLocationRoutes();

  return (
    <>
      <PageHeader title={"IMAGING"} />
      {idParams ? (
        ""
      ) : (
        <SectionHeaderNav sections={sections} basePath="imaging" />
      )}
      <div className={styles.Imaging}>
        <Outlet />
      </div>
    </>
  );
}

export default Imaging;
