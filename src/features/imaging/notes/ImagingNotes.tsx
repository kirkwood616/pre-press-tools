import AddLineItem from "@/features/imaging/controls/AddLineItem";
import NotesIcon from "@/icons/NotesIcon";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import styles from "./ImagingNotes.module.css";

interface Props {
  isRead?: boolean;
}

function ImagingNotes({ isRead }: Props) {
  const { record } = useImagingOrderStore();

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
