import LockOverlay from "@/components/overlays/LockOverlay";
import ConfirmChanges from "@/features/imaging/controls/ConfirmChanges";
import EditOrder from "@/features/imaging/controls/EditOrder";
import ImagingLog from "@/features/imaging/log/ImagingLog";
import ImagingMetadata from "@/features/imaging/metadata/ImagingMetadata";
import ImagingNotes from "@/features/imaging/notes/ImagingNotes";
import ImagingSetups from "@/features/imaging/setups/ImagingSetups";
import OrderStatus from "@/features/imaging/status/OrderStatus";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useImagingRecordsStore } from "@/stores/imaging/useImagingRecordsStore";
import { useEffect } from "react";
import styles from "./ImagingOrder.module.css";

interface Props {
  isRead?: boolean;
  isEdit?: boolean;
  isCreate?: boolean;
}

function ImagingOrder({ isRead, isEdit, isCreate }: Props) {
  const { idParams } = useLocationRoutes();
  const { records } = useImagingRecordsStore();
  const { order, setOrder, resetOrder } = useImagingOrderStore();

  useEffect(() => {
    if (isCreate) {
      resetOrder();
      return;
    }
    if (idParams) {
      const orderMatch = records.find((item) => item.id === idParams);
      if (orderMatch) setOrder(orderMatch);
    }
  }, [records, isCreate]);

  if (isRead)
    return (
      <section className={styles.ImagingOrder}>
        {order.isLocked && (
          <LockOverlay message={"Order is currently locked."} />
        )}
        <ImagingMetadata isRead />
        <EditOrder recordID={order!.id!} />
        <ImagingSetups isRead />
        {order!.notes.length ? <ImagingNotes isRead /> : <></>}
        <ImagingLog />
        <div className={styles.orderFooter}></div>
      </section>
    );

  if (isEdit)
    return (
      <section className={styles.ImagingOrder}>
        <ConfirmChanges />
        <ImagingMetadata />
        <OrderStatus />
        <ImagingSetups />
        <ImagingNotes />
        <ImagingLog />
        <div className={styles.orderFooter}></div>
      </section>
    );

  if (isCreate)
    return (
      <div className={styles.ImagingOrder}>
        <ConfirmChanges />
        <ImagingMetadata />
        <OrderStatus />
        <ImagingSetups />
        <ImagingNotes />
        <ImagingLog />
        <div className={styles.orderFooter}></div>
      </div>
    );
}

export default ImagingOrder;
