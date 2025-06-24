import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import styles from "./ImagingMetadata.module.css";

interface Props {
  isRead?: boolean;
}

function ImagingMetadata({ isRead }: Props) {
  const { record, setOrderNumber, setDue } = useImagingOrderStore(
    (state) => state
  );

  return (
    <div className={styles.ImagingMetadata}>
      <div className={styles.orderContainer}>
        <div>
          <h3>Order:</h3>
        </div>
        <div className={styles.orderNumber}>
          {isRead ? (
            <>{record.order}</>
          ) : (
            <input
              type="text"
              value={record.order}
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
            <>{record.due}</>
          ) : (
            <input
              type="text"
              value={record.due}
              onChange={(e) => setDue(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImagingMetadata;
