import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { imagingStatus, type Status } from "@/types/Imaging";
import styles from "./OrderStatus.module.css";

function OrderStatus() {
  const { draftRecord, setStatus } = useImagingDraftStore();

  return (
    <div className={styles.OrderStatus}>
      <label htmlFor="statusSelect">Status:</label>
      <select
        name="statusSelect"
        id="statusSelect"
        value={draftRecord.status}
        onChange={(e) => setStatus(e.target.value as Status)}
      >
        {imagingStatus.map((status, index) => (
          <option value={status} key={index + status}>
            {status.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OrderStatus;
