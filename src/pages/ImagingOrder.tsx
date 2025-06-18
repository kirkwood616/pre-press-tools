import { useContext } from "react";

import ImagingLog from "../components/features/imaging/views/ImagingLog";
import ImagingNotes from "../components/features/imaging/views/ImagingNotes";
import ImagingSetups from "../components/features/imaging/views/ImagingSetups";
import ImagingContext from "../context/ImagingContext";
import useLocationRoutes from "../hooks/useLocationRoutes";
import styles from "./ImagingOrder.module.css";

function ImagingOrder() {
  const { location } = useLocationRoutes();
  const { records } = useContext(ImagingContext);
  const { recordIndex } = location.state;
  const record = records[recordIndex];

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
