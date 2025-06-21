import NotesIcon from "@/icons/NotesIcon";
import type { ImagingRecord } from "@/types/Imaging";
import styles from "./ImagingNotes.module.css";

interface Props {
  record?: ImagingRecord;
  isEdit?: boolean;
  isCreate?: boolean;
}

function ImagingNotes({ record, isEdit, isCreate }: Props) {
  return (
    <div className={styles.ImagingNotes}>
      <div className={styles.notesHeader}>
        <NotesIcon size="1.5rem" />
      </div>
      <div className={styles.notesBody}>
        <ul>
          {record!.notes.map((note, index) => (
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
