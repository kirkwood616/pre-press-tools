import EditIcon from "@/icons/EditIcon";
import { updateRecordLock } from "@/services/imagingServices";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import type { ImagingRecord } from "@/types/Imaging";
import { Link } from "react-router-dom";
import styles from "./EditOrder.module.css";

interface Props {
  recordID: string;
}

function EditOrder({ recordID }: Props) {
  const { order } = useImagingOrderStore();
  const { setDraft } = useImagingDraftStore();
  const { setIsLoading } = useLoadingStore();

  async function handleEditOrder(order: ImagingRecord) {
    setIsLoading(true);
    try {
      await updateRecordLock(order.id!, true);
      setDraft(order);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.EditOrder}>
      <Link
        to={`/imaging/edit/${recordID}`}
        onClick={() => handleEditOrder(order)}
      >
        <EditIcon />
        EDIT ORDER
      </Link>
    </div>
  );
}

export default EditOrder;
