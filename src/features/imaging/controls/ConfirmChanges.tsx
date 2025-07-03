import Loading from "@/components/loading/Loading";
import GoButton from "@/components/ui/buttons/GoButton";
import {
  addNewOrderRecord,
  updateOrderRecord,
  updateRecordLock,
} from "@/services/imagingServices";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import type { ImagingRecord } from "@/types/Imaging";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmChanges.module.css";

interface Props {
  isEdit?: boolean;
  isCreate?: boolean;
}

function ConfirmChanges({ isEdit, isCreate }: Props) {
  const { order, setOrder } = useImagingOrderStore();
  const { draftRecord, resetDraft } = useImagingDraftStore();
  const { isLoading, setIsLoading } = useLoadingStore();
  const navigate = useNavigate();

  async function handleEditCancel() {
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

  async function handleEditSave() {
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

  async function handleCreateCancel() {
    setIsLoading(true);
    try {
      resetDraft();
      navigate(-1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateSave() {
    setIsLoading(true);
    const newRecord = { ...draftRecord };
    delete newRecord.id;
    try {
      const addedDoc = await addNewOrderRecord(newRecord);
      resetDraft();
      const newDoc: ImagingRecord = { id: String(addedDoc.id), ...newRecord };
      setOrder(newDoc);
      navigate(`/imaging/${newDoc.status}/${newDoc.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Loading />;
  if (isEdit)
    return (
      <div className={styles.ConfirmChanges}>
        <GoButton type="cancel" clickFunction={handleEditCancel}>
          CANCEL
        </GoButton>
        <GoButton type="primary" clickFunction={handleEditSave}>
          SAVE
        </GoButton>
      </div>
    );

  if (isCreate)
    return (
      <div className={styles.ConfirmChanges}>
        <GoButton type="cancel" clickFunction={handleCreateCancel}>
          CANCEL
        </GoButton>
        <GoButton type="primary" clickFunction={handleCreateSave}>
          SAVE
        </GoButton>
      </div>
    );
}

export default ConfirmChanges;
