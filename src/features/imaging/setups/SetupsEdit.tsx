import ButtonArrow from "@/components/ui/buttons/ButtonArrow";
import ButtonCloseX from "@/components/ui/buttons/ButtonCloseX";
import type { ImagingRecord } from "@/types/Imaging";

interface Props {
  record: ImagingRecord;
  styles: CSSModuleClasses;
}

function SetupsEdit({ record, styles }: Props) {
  return (
    <>
      {record.setups.map((setup, index) => (
        <tr
          className={setup.isFilm ? styles.film : styles.cts}
          key={setup.artFile + index}
        >
          <td>
            <ButtonCloseX />
          </td>
          <td>{setup.setup.toString().toUpperCase()}</td>
          <td className={styles.artFile}>
            <input type="text" value={setup.artFile} />
          </td>
          <td>
            <input
              type="number"
              name="screensNumber"
              id="screensNumber"
              min="0"
              max="25"
              value={setup.screens}
            />
          </td>
          <td>
            <input type="checkbox" name="templateCheck" id="templateCheck" />
          </td>
          <td>
            <ButtonArrow direction="down" />
            <ButtonArrow direction="up" />
          </td>
        </tr>
      ))}
    </>
  );
}

export default SetupsEdit;
