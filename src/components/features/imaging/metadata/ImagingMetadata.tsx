import styles from "../../../../pages/ImagingOrder.module.css";
import type { ImagingRecord } from "../../../../types/Imaging";

interface Props {
  record?: ImagingRecord;
  isRead?: boolean;
  isEdit?: boolean;
  isCreate?: boolean;
}

function ImagingMetadata({ record, isRead, isEdit, isCreate }: Props) {
  return (
    <div className={styles.imagingHeader}>
      <div className={styles.orderContainer}>
        <div>
          <h3>Order:</h3>
        </div>
        <div className={styles.orderNumber}>
          {record && isRead && <>{record.order}</>}
          {record && isEdit && <input type="text" value={record.order} />}
          {!record && isCreate && <input type="text" />}
        </div>
      </div>

      <div className={styles.dueContainer}>
        <div>
          <h3>Due:</h3>
        </div>
        <div className={styles.dueDate}>
          {record && isRead && <>{record.due}</>}
          {record && isEdit && <input type="text" value={record.due} />}
          {!record && isCreate && <input type="text" />}
        </div>
      </div>
    </div>
  );
}

export default ImagingMetadata;
