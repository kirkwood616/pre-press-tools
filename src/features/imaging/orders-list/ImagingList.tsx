import Loading from "@/components/loading/Loading";
import ImagingTable from "@/features/imaging/orders-list/ImagingTable";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ImagingList.module.css";

function ImagingList() {
  const { idParams } = useLocationRoutes();
  const { isLoading } = useLoadingStore();
  const { resetOrder } = useImagingOrderStore();

  useEffect(() => {
    if (!idParams) resetOrder();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className={styles.ImagingList}>
      {idParams ? <Outlet /> : <ImagingTable />}
    </div>
  );
}

export default ImagingList;
