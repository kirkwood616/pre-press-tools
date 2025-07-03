import GoButton from "@/components/ui/buttons/GoButton";
import EditIcon from "@/icons/EditIcon";
import { updateRecordLock } from "@/services/imagingServices";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import type { ImagingRecord } from "@/types/Imaging";
import { useNavigate } from "react-router-dom";
import styles from "./EditOrder.module.css";

interface Props {
  recordID: string;
}

function EditOrder({ recordID }: Props) {
  const { order } = useImagingOrderStore();
  const { setDraft } = useImagingDraftStore();
  const { setIsLoading } = useLoadingStore();
  const navigate = useNavigate();

  async function handleEditOrder(order: ImagingRecord) {
    setIsLoading(true);
    try {
      navigate(`/imaging/edit/${recordID}`);
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
      <GoButton type={"secondary"} clickFunction={() => handleEditOrder(order)}>
        <EditIcon />
        EDIT ORDER
      </GoButton>
    </div>
  );
}

export default EditOrder;
