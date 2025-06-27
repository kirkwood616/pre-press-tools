import Loading from "@/components/loading/Loading";
import GoButton from "@/components/ui/buttons/GoButton";
import { updateOrderRecord } from "@/services/imagingServices";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmChanges.module.css";

function ConfirmChanges() {
  const { record } = useImagingOrderStore();
  const { draftRecord, resetDraft } = useImagingDraftStore();
  const { isLoading, setIsLoading } = useLoadingStore();
  const navigate = useNavigate();

  function handleCancel() {
    resetDraft();
    navigate(`/imaging/${record.status}/${record.id}`);
  }

  async function handleSave() {
    setIsLoading(true);
    const updatedRecord = { ...draftRecord };
    delete updatedRecord.id;
    try {
      await updateOrderRecord(record.id!, updatedRecord);
      resetDraft();
      navigate(`/imaging/${record.status}/${record.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Loading />;
  return (
    <div className={styles.ConfirmChanges}>
      <GoButton label="CANCEL" type="cancel" clickFunction={handleCancel} />
      <GoButton label="SAVE" type="primary" clickFunction={handleSave} />
    </div>
  );
}

export default ConfirmChanges;
