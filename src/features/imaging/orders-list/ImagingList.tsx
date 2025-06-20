import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import ImagingContext from "../../../context/ImagingContext";
import useLocationRoutes from "../../../hooks/useLocationRoutes";
import styles from "./ImagingList.module.css";
import ImagingTable from "./ImagingTable";

function ImagingList() {
  const { idParams } = useLocationRoutes();
  const { isDataLoading } = useContext(ImagingContext);

  if (isDataLoading) return <Loading />;
  return (
    <div className={styles.ImagingList}>
      {idParams ? <Outlet /> : <ImagingTable />}
    </div>
  );
}

export default ImagingList;
