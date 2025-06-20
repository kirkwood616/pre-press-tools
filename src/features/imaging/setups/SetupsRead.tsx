import type { ImagingRecord } from "@/types/Imaging";

interface Props {
  record: ImagingRecord;
  styles: CSSModuleClasses;
}

function SetupsRead({ record, styles }: Props) {
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
              // checked={item.isChecked}
              onChange={() => !setup.isChecked}
            />
          </td>
          <td>{setup.setup.toString().toUpperCase()}</td>
          <td className={styles.artFile}>{setup.artFile}</td>
          <td>{setup.screens}</td>
          <td></td>
        </tr>
      ))}
    </>
  );
}

export default SetupsRead;
