import type { ImagingRecord } from "../../../types/Imaging";
import styles from "./ImagingSetups.module.css";

interface Props {
  record: ImagingRecord;
}

function ImagingSetups({ record }: Props) {
  return (
    <div className={styles.ImagingSetups}>
      <table>
        <thead>
          <tr>
            <th className={styles.checkColumn}>
              <input type="checkbox" name="checkAll" id="checkAll" />
            </th>
            <th className={styles.numberColumn}>Setup</th>
            <th className={styles.artFile}>Art File</th>
            <th className={styles.numberColumn}>Screens</th>
            <th className={styles.dataColumn}></th>
          </tr>
        </thead>
        <tbody>
          {record.setups.map((setup, index) => (
            <tr
              className={setup.isFilm ? styles.film : styles.cts}
              key={setup.artFile + index}
            >
              <td>
                <input
                  type="checkbox"
                  name="setupCheck"
                  id="setupCheck"
                  // checked={item.isChecked}
                  onChange={() => !setup.isChecked}
                />
              </td>
              <td>{setup.setup}</td>
              <td className={styles.artFile}>{setup.artFile}</td>
              <td>{setup.screens}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImagingSetups;
