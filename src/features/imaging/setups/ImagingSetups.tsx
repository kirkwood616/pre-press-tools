import AddLineItem from "@/features/imaging/controls/AddLineItem";
import PocketIcon from "@/icons/PocketIcon";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import styles from "./ImagingSetups.module.css";
import SetupsEdit from "./SetupsEdit";
import SetupsRead from "./SetupsRead";

interface Props {
  isRead?: boolean;
  isEdit?: boolean;
  isCreate?: boolean;
}

function ImagingSetups({ isRead, isEdit }: Props) {
  const { setCheckedAll } = useImagingOrderStore();
  const { addSetup } = useImagingDraftStore();

  return (
    <div className={styles.ImagingSetups}>
      <table>
        <thead>
          <tr>
            <th className={styles.iconSelect}>
              {isRead && (
                <input
                  type="checkbox"
                  name="checkAll"
                  id="checkAll"
                  onChange={() => setCheckedAll()}
                />
              )}
            </th>
            <th className={styles.numberColumn}>Setup</th>
            {!isRead && <th className={styles.iconSelect}>Film</th>}
            <th className={styles.artFile}>Art File</th>
            <th className={styles.numberColumn}>Screens</th>
            <th className={styles.iconSelect}>
              {!isRead && <PocketIcon size={"1.5rem"} fill={"white"} />}
            </th>
            {!isRead && <th className={styles.addArrows}></th>}
          </tr>
        </thead>

        <tbody>
          {isRead && <SetupsRead />}
          {isEdit && <SetupsEdit />}
        </tbody>
      </table>
      {!isRead && <AddLineItem label="ADD SETUP" onItemClick={addSetup} />}
    </div>
  );
}

export default ImagingSetups;
