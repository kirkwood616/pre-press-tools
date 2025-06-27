import EditOrder from "@/features/imaging/controls/EditOrder";
import ImagingLog from "@/features/imaging/log/ImagingLog";
import ImagingMetadata from "@/features/imaging/metadata/ImagingMetadata";
import ImagingNotes from "@/features/imaging/notes/ImagingNotes";
import ImagingSetups from "@/features/imaging/setups/ImagingSetups";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useImagingRecordsStore } from "@/stores/imaging/useImagingRecordsStore";
import { useEffect } from "react";
import styles from "./ImagingOrder.module.css";

function ImagingOrder() {
  const { idParams } = useLocationRoutes();
  const { records } = useImagingRecordsStore();
  const { order, setOrder } = useImagingOrderStore();

  useEffect(() => {
    if (idParams) {
      const order = records.find((item) => item.id === idParams);
      if (order) setOrder(order);
    }
  }, [records]);

  return (
    <section className={styles.ImagingOrder}>
      <ImagingMetadata isRead />
      <EditOrder recordID={order!.id!} />
      <ImagingSetups isRead />
      {order!.notes.length ? <ImagingNotes isRead /> : <></>}
      <ImagingLog />
      <div className={styles.orderFooter}></div>
    </section>
  );
}

export default ImagingOrder;
