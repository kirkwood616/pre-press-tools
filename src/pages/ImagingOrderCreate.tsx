import ConfirmChanges from "@/features/imaging/controls/ConfirmChanges";
import OrderControls from "@/features/imaging/controls/OrderControls";
import ImagingLog from "@/features/imaging/log/ImagingLog";
import ImagingMetadata from "@/features/imaging/metadata/ImagingMetadata";
import ImagingNotes from "@/features/imaging/notes/ImagingNotes";
import ImagingSetups from "@/features/imaging/setups/ImagingSetups";
import OrderStatus from "@/features/imaging/status/OrderStatus";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useEffect } from "react";
import styles from "./ImagingOrder.module.css";

function ImagingOrderCreate() {
  const { resetDraft } = useImagingDraftStore();

  useEffect(() => {
    resetDraft();

    return () => {
      resetDraft();
    };
  }, []);

  return (
    <section className={styles.ImagingOrder}>
      <OrderControls>
        <ConfirmChanges isCreate />
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

export default ImagingOrderCreate;
