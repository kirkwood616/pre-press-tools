import ImagingTable from "../tables/ImagingTable";
import styles from "./ImagingList.module.css";

interface Props {}

function ImagingList({}: Props) {
  return (
    <div className={styles.ImagingList}>
      <ImagingTable />
    </div>
  );
}

export default ImagingList;
