import EditIcon from "@/icons/EditIcon";
import type { ImagingRecord } from "@/types/Imaging";
import { Link } from "react-router-dom";
import styles from "./EditOrder.module.css";

interface Props {
  record?: ImagingRecord;
}

function EditOrder({ record }: Props) {
  return (
    <div className={styles.EditOrder}>
      <Link to={`/imaging/edit/${record?.id}`}>
        <EditIcon />
        EDIT ORDER
      </Link>
    </div>
  );
}

export default EditOrder;
