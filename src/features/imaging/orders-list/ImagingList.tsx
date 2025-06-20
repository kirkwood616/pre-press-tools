import Loading from "@/components/loading/Loading";
import ImagingContext from "@/context/ImagingContext";
import ImagingTable from "@/features/imaging/orders-list/ImagingTable";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ImagingList.module.css";

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
