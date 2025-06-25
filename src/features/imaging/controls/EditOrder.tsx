import EditIcon from "@/icons/EditIcon";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { Link } from "react-router-dom";
import styles from "./EditOrder.module.css";

interface Props {
  recordID: string;
}

function EditOrder({ recordID }: Props) {
  const { record } = useImagingOrderStore();
  const { setDraft } = useImagingDraftStore();

  return (
    <div className={styles.EditOrder}>
      <Link to={`/imaging/edit/${recordID}`} onClick={() => setDraft(record)}>
        <EditIcon />
        EDIT ORDER
      </Link>
    </div>
  );
}

export default EditOrder;
