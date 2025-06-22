import { imagingStatus, type ImagingRecord } from "@/types/Imaging";
import styles from "./Status.module.css";

interface Props {
  record?: ImagingRecord;
  changeFunction?: () => void;
}

function Status({ record, changeFunction }: Props) {
  return (
    <div className={styles.Status}>
      <label htmlFor="statusSelect">Status:</label>
      <select
        name="statusSelect"
        id="statusSelect"
        defaultValue={record ? record.status : imagingStatus[0]}
        onChange={changeFunction}
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

export default Status;
