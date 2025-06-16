import { Outlet } from "react-router-dom";
import useLocationRoutes from "../../../hooks/useLocationRoutes";
import styles from "./ImagingList.module.css";
import ImagingTable from "./ImagingTable";

function ImagingList() {
  const { idParams } = useLocationRoutes();

  return (
    <div className={styles.ImagingList}>
      {idParams ? <Outlet /> : <ImagingTable />}
    </div>
  );
}

export default ImagingList;
