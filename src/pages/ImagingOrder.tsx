import ImagingLog from "../components/features/imaging/ImagingLog";
import ImagingNotes from "../components/features/imaging/ImagingNotes";
import ImagingSetups from "../components/features/imaging/ImagingSetups";
import type { ImagingRecord } from "../types/Imaging";
import styles from "./ImagingOrder.module.css";

interface Props {
  record: ImagingRecord;
}

function ImagingOrder({ record }: Props) {
  return (
    <section className={styles.ImagingOrder}>
      <div className={styles.imagingHeader}>
        <div className={styles.orderContainer}>
          <div>
            <h3>Order:</h3>
          </div>
          <div className={styles.orderNumber}>{record.order}</div>
        </div>

        <div className={styles.dueContainer}>
          <div>
            <h3>Due:</h3>
          </div>
          <div className={styles.dueDate}>{record.due}</div>
        </div>
      </div>

      <ImagingSetups record={record} />

      {record.notes.length ? <ImagingNotes record={record} /> : <></>}

      <ImagingLog record={record} />

      <div className={styles.orderFooter}></div>
    </section>
  );
}

export default ImagingOrder;
