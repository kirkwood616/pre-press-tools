import ConfirmChanges from "@/features/imaging/controls/ConfirmChanges";
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

function ImagingOrderEdit() {
  const { idParams } = useLocationRoutes();
  const { records } = useImagingRecordsStore();
  const { setOrder } = useImagingOrderStore();

  useEffect(() => {
    if (idParams) {
      const orderMatch = records.find((item) => item.id === idParams);
      if (orderMatch) setOrder(orderMatch);
    }
  }, [records]);

  return (
    <section className={styles.ImagingOrder}>
      <ConfirmChanges />
      <ImagingMetadata />
      <OrderStatus />
      <ImagingSetups isEdit />
      <ImagingNotes />
      <ImagingLog />
      <div className={styles.orderFooter}></div>
    </section>
  );
}

export default ImagingOrderEdit;
