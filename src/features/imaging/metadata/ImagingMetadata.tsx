import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import styles from "./ImagingMetadata.module.css";

interface Props {
  isRead?: boolean;
}

function ImagingMetadata({ isRead }: Props) {
  const { order } = useImagingOrderStore();
  const { draftRecord, setOrderNumber, setDue } = useImagingDraftStore();

  return (
    <div className={styles.ImagingMetadata}>
      <div className={styles.orderContainer}>
        <div>
          <h3>Order:</h3>
        </div>
        <div className={styles.orderNumber}>
          {isRead ? (
            <>{order.order}</>
          ) : (
            <input
              type="text"
              value={draftRecord.order}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
          )}
        </div>
      </div>

      <div className={styles.dueContainer}>
        <div>
          <h3>Due:</h3>
        </div>
        <div className={styles.dueDate}>
          {isRead ? (
            <>{order.due}</>
          ) : (
            <input
              type="text"
              value={draftRecord.due}
              onChange={(e) => setDue(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImagingMetadata;
