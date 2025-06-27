import Log from "@/icons/Log";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useState } from "react";
import styles from "./ImagingLog.module.css";

function ImagingLog() {
  const { order } = useImagingOrderStore();
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <div className={styles.ImagingLog}>
      <div className={styles.logHeader}>
        <button onClick={() => setIsLogOpen(!isLogOpen)}>
          <Log size={"1.5rem"} />
        </button>
      </div>
      <div className={styles.logBody + (isLogOpen ? styles.visible : "")}>
        <ul>
          {order.statusLog.map((log, index) => (
            <li className={styles.logEntry} key={log.timestamp + index}>
              {log.logStatus} :: {log.timestamp}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.orderFooter}></div>
    </div>
  );
}

export default ImagingLog;
