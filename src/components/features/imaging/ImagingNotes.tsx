import type { ImagingRecord } from "../../../types/Imaging";
import styles from "./ImagingNotes.module.css";

interface Props {
  record: ImagingRecord;
}

function ImagingNotes({ record }: Props) {
  return (
    <div className={styles.ImagingNotes}>
      <div className={styles.notesHeader}>NOTES</div>
      <div className={styles.notesBody}>
        <ul>
          {record.notes.map((note, index) => (
            <li className={styles.note} key={note.noteNumber + index}>
              <mark>{note.noteMessage}</mark>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImagingNotes;
