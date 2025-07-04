import LockOverlay from "@/components/overlays/LockOverlay";
import EditOrder from "@/features/imaging/controls/EditOrder";
import OrderControls from "@/features/imaging/controls/OrderControls";
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
      const orderMatch = records.find((item) => item.id === idParams);
      if (orderMatch) setOrder(orderMatch);
    }
  }, [records]);

  return (
    <section className={styles.ImagingOrder}>
      {order.isLocked && <LockOverlay message={"Order is currently locked."} />}
      <OrderControls>
        <EditOrder recordID={order!.id!} />
      </OrderControls>
      <ImagingMetadata isRead />
      <ImagingSetups isRead />
      {order!.notes.length > 0 && <ImagingNotes isRead />}
      <ImagingLog />
      <div className={styles.orderFooter}></div>
    </section>
  );
}

export default ImagingOrder;
