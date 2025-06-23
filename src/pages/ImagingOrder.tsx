import ImagingContext from "@/context/ImagingContext";
import EditOrder from "@/features/imaging/controls/EditOrder";
import ImagingLog from "@/features/imaging/log/ImagingLog";
import ImagingMetadata from "@/features/imaging/metadata/ImagingMetadata";
import ImagingNotes from "@/features/imaging/notes/ImagingNotes";
import ImagingSetups from "@/features/imaging/setups/ImagingSetups";
import Status from "@/features/imaging/status/Status";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { useContext } from "react";
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

      {isRead && <EditOrder record={record} />}
      {!isRead && <Status record={record} />}

      <ImagingSetups
        record={record}
        isRead={isRead}
        isEdit={isEdit}
        isCreate={isCreate}
      />

      {record && isRead && record.notes.length && (
        <ImagingNotes record={record} isRead />
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
