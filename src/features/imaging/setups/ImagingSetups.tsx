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

function ImagingSetups({ record, isRead, isEdit, isCreate }: Props) {
  return (
    <div className={styles.ImagingSetups}>
      <table>
        <thead>
          <tr>
            <th className={styles.selectColumn}>
              {record && isRead && (
                <input type="checkbox" name="checkAll" id="checkAll" />
              )}
              {!isRead && <>X</>}
            </th>
            <th className={styles.numberColumn}>Setup</th>
            <th className={styles.artFile}>Art File</th>
            <th className={styles.numberColumn}>Screens</th>
            <th className={styles.dataColumn}>PK</th>
            {!isRead && <th>+</th>}
          </tr>
        </thead>

        <tbody>
          {record && isRead && <SetupsRead record={record} styles={styles} />}
          {record && isEdit && <SetupsEdit record={record} styles={styles} />}
        </tbody>
      </table>
    </div>
  );
}

export default ImagingSetups;
