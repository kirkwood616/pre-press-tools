import Loading from "@/components/loading/Loading";
import GoButton from "@/components/ui/buttons/GoButton";
import {
  updateOrderRecord,
  updateRecordLock,
} from "@/services/imagingServices";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmChanges.module.css";

function ConfirmChanges() {
  const { order } = useImagingOrderStore();
  const { draftRecord, resetDraft } = useImagingDraftStore();
  const { isLoading, setIsLoading } = useLoadingStore();
  const navigate = useNavigate();

  async function handleCancel() {
    setIsLoading(true);
    try {
      await updateRecordLock(order.id!, false);
      resetDraft();
      navigate(`/imaging/${order.status}/${order.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSave() {
    setIsLoading(true);
    const updatedRecord = { ...draftRecord };
    delete updatedRecord.id;
    try {
      await updateOrderRecord(order.id!, updatedRecord);
      resetDraft();
      navigate(`/imaging/${order.status}/${order.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Loading />;
  return (
    <div className={styles.ConfirmChanges}>
      <GoButton type="cancel" clickFunction={handleCancel}>
        CANCEL
      </GoButton>
      <GoButton type="primary" clickFunction={handleSave}>
        SAVE
      </GoButton>
    </div>
  );
}

export default ConfirmChanges;
