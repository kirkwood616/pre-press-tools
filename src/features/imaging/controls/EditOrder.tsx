import GoButton from "@/components/ui/buttons/GoButton";
import EditIcon from "@/icons/EditIcon";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import { useNavigate } from "react-router-dom";
import styles from "./EditOrder.module.css";

interface Props {
  recordID: string;
}

function EditOrder({ recordID }: Props) {
  const { setIsLoading } = useLoadingStore();
  const navigate = useNavigate();

  async function handleEditOrder() {
    setIsLoading(true);
    try {
      navigate(`/imaging/edit/${recordID}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.EditOrder}>
      <GoButton type={"secondary"} clickFunction={handleEditOrder}>
        <EditIcon />
        EDIT ORDER
      </GoButton>
    </div>
  );
}

export default EditOrder;
