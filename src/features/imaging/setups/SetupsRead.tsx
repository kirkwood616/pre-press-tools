import PocketIcon from "@/icons/PocketIcon";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import styles from "./ImagingSetups.module.css";

function SetupsRead() {
  const { record, setChecked } = useImagingOrderStore();

  return (
    <>
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
              checked={setup.isChecked}
              onChange={() => setChecked(index)}
            />
          </td>
          <td>{setup.setup.toString().toUpperCase()}</td>
          <td className={styles.artFile}>{setup.artFile}</td>
          <td>{setup.screens}</td>
          <td>
            {setup.isAltTemplate && <PocketIcon fill="var(--red)" animate />}
          </td>
        </tr>
      ))}
    </>
  );
}

export default SetupsRead;
