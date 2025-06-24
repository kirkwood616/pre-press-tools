import AddLineItem from "@/features/imaging/controls/AddLineItem";
import NotesIcon from "@/icons/NotesIcon";
import type { ImagingRecord } from "@/types/Imaging";
import styles from "./ImagingNotes.module.css";

interface Props {
  record?: ImagingRecord;
  isRead?: boolean;
  isEdit?: boolean;
  isCreate?: boolean;
}

function ImagingNotes({ record, isRead }: Props) {
  return (
    <div className={styles.ImagingNotes}>
      <div className={styles.notesHeader}>
        <NotesIcon size="1.5rem" />
      </div>
      <div className={styles.notesBody}>
        <ul>
          {record!.notes.map((note, index) => (
            <li className={styles.note} key={note + index}>
              {isRead && <mark>{note}</mark>}
              {!isRead && <input type="text" value={note} />}
            </li>
          ))}
        </ul>
      </div>
      {!isRead && <AddLineItem label="ADD NOTE" />}
    </div>
  );
}

export default ImagingNotes;
