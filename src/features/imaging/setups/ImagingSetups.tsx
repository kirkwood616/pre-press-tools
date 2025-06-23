import AddLineItem from "@/features/imaging/controls/AddLineItem";
import PocketIcon from "@/icons/PocketIcon";
import type { ImagingRecord } from "@/types/Imaging";
import styles from "./ImagingSetups.module.css";
import SetupsEdit from "./SetupsEdit";
import SetupsRead from "./SetupsRead";

interface Props {
  record?: ImagingRecord;
  isRead?: boolean;
  isEdit?: boolean;
  isCreate?: boolean;
}

function ImagingSetups({ record, isRead, isEdit }: Props) {
  return (
    <div className={styles.ImagingSetups}>
      <table>
        <thead>
          <tr>
            <th className={styles.iconSelect}>
              {record && isRead && (
                <input type="checkbox" name="checkAll" id="checkAll" />
              )}
            </th>
            <th className={styles.numberColumn}>Setup</th>
            {!isRead && <th className={styles.iconSelect}>Film</th>}
            <th className={styles.artFile}>Art File</th>
            <th className={styles.numberColumn}>Screens</th>
            <th className={styles.iconSelect}>
              {!isRead && <PocketIcon size={"1.5rem"} fill={"white"} />}
            </th>
            {!isRead && <th className={styles.addArrows}></th>}
          </tr>
        </thead>

        <tbody>
          {record && isRead && <SetupsRead record={record} styles={styles} />}
          {record && isEdit && <SetupsEdit record={record} styles={styles} />}
        </tbody>
      </table>
      {!isRead && <AddLineItem label="ADD SETUP" />}
    </div>
  );
}

export default ImagingSetups;
