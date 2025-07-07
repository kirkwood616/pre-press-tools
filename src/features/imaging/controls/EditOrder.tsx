import GoButton from "@/components/ui/buttons/GoButton";
import EditIcon from "@/icons/EditIcon";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useLoadingStore } from "@/stores/loading/useLoadingStore";
import { useNavigate } from "react-router-dom";

function EditOrder() {
  const { order } = useImagingOrderStore();
  const { setIsLoading } = useLoadingStore();
  const navigate = useNavigate();

  async function handleEditOrder() {
    setIsLoading(true);
    try {
      navigate(`/imaging/edit/${order.id!}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <GoButton type={"secondary"} clickFunction={handleEditOrder}>
      <EditIcon />
      EDIT ORDER
    </GoButton>
  );
}

export default EditOrder;
