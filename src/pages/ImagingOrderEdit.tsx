import ConfirmChanges from "@/features/imaging/controls/ConfirmChanges";
import ImagingLog from "@/features/imaging/log/ImagingLog";
import ImagingMetadata from "@/features/imaging/metadata/ImagingMetadata";
import ImagingNotes from "@/features/imaging/notes/ImagingNotes";
import ImagingSetups from "@/features/imaging/setups/ImagingSetups";
import OrderStatus from "@/features/imaging/status/OrderStatus";
import styles from "./ImagingOrder.module.css";

function ImagingOrderEdit() {
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
