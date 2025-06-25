import ButtonCloseX from "@/components/ui/buttons/ButtonCloseX";
import AddLineItem from "@/features/imaging/controls/AddLineItem";
import NotesIcon from "@/icons/NotesIcon";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import styles from "./ImagingNotes.module.css";

interface Props {
  isRead?: boolean;
}

function ImagingNotes({ isRead }: Props) {
  const { record } = useImagingOrderStore();
  const { draftRecord, setNote, addNote, deleteNote } = useImagingDraftStore();

  return (
    <div className={styles.ImagingNotes}>
      <div className={styles.notesHeader}>
        <NotesIcon size="1.5rem" />
      </div>
      <div className={styles.notesBody}>
        <ul className={!isRead ? styles.ulEdit : ""}>
          {isRead &&
            record!.notes.map((note, index) => (
              <li
                className={styles.note}
                key={record.id + "__" + index.toString()}
              >
                <mark>{note}</mark>
              </li>
            ))}

          {!isRead &&
            draftRecord!.notes.map((note, index) => (
              <div
                className={styles.noteEditContainer}
                key={index.toString() + "__" + record.id}
              >
                <ButtonCloseX clickFunction={() => deleteNote(index)} />
                <li className={styles.note}>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value, index)}
                  />
                </li>
              </div>
            ))}
        </ul>
      </div>
      {!isRead && <AddLineItem label="ADD NOTE" onItemClick={addNote} />}
    </div>
  );
}

export default ImagingNotes;
