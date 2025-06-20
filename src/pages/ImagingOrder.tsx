import { useContext } from "react";
import ImagingLog from "../components/features/imaging/log/ImagingLog";
import ImagingMetadata from "../components/features/imaging/metadata/ImagingMetadata";
import ImagingNotes from "../components/features/imaging/notes/ImagingNotes";
import ImagingSetups from "../components/features/imaging/setups/ImagingSetups";
import ImagingContext from "../context/ImagingContext";
import useLocationRoutes from "../hooks/useLocationRoutes";
import styles from "./ImagingOrder.module.css";

interface Props {
  isRead?: boolean;
  isEdit?: boolean;
  isCreate?: boolean;
}

function ImagingOrder({ isRead, isEdit, isCreate }: Props) {
  const { idParams } = useLocationRoutes();
  const { records } = useContext(ImagingContext);
  const record = records.find((item) => item.id === idParams);

  return (
    <section className={styles.ImagingOrder}>
      <ImagingMetadata
        record={record}
        isRead={isRead}
        isEdit={isEdit}
        isCreate={isCreate}
      />

      <ImagingSetups
        record={record}
        isRead={isRead}
        isEdit={isEdit}
        isCreate={isCreate}
      />

      {record && isRead && record.notes.length && (
        <ImagingNotes record={record} />
      )}
      {record && isRead && !record.notes.length && <></>}
      {record && isEdit && <ImagingNotes record={record} />}
      {!record && isCreate && <ImagingNotes />}

      <ImagingLog record={record!} />

      <div className={styles.orderFooter}></div>
    </section>
  );
}

export default ImagingOrder;
