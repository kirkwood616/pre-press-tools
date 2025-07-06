import ConfirmChanges from "@/features/imaging/controls/ConfirmChanges";
import OrderControls from "@/features/imaging/controls/OrderControls";
import ImagingLog from "@/features/imaging/log/ImagingLog";
import ImagingMetadata from "@/features/imaging/metadata/ImagingMetadata";
import ImagingNotes from "@/features/imaging/notes/ImagingNotes";
import ImagingSetups from "@/features/imaging/setups/ImagingSetups";
import OrderStatus from "@/features/imaging/status/OrderStatus";
import { updateRecordLock } from "@/services/imagingServices";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useEffect } from "react";
import styles from "./ImagingOrder.module.css";

function ImagingOrderEdit() {
  const { order } = useImagingOrderStore();
  const { setDraft, resetDraft } = useImagingDraftStore();

  useEffect(() => {
    updateRecordLock(order.id!, true);
    setDraft(order);

    return () => {
      const updatedState = useImagingOrderStore.getState().order;
      if (updatedState.id) updateRecordLock(order.id!, false);
      resetDraft();
    };
  }, []);

  return (
    <section className={styles.ImagingOrder}>
      <OrderControls>
        <ConfirmChanges isEdit />
      </OrderControls>
      <ImagingMetadata />
      <OrderStatus />
      <ImagingSetups />
      <ImagingNotes />
      <ImagingLog />
      <div className={styles.orderFooter}></div>
    </section>
  );
}

export default ImagingOrderEdit;
