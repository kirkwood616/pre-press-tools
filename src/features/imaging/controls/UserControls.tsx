import GoButton from "@/components/ui/buttons/GoButton";
import EditOrder from "@/features/imaging/controls/EditOrder";
import UpdateStatus from "@/features/imaging/controls/UpdateStatus";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { useNavigate } from "react-router-dom";
import styles from "./OrderControls.module.css";

function UserControls() {
  const { getSectionNoParams } = useLocationRoutes();
  const navigate = useNavigate();
  const section = getSectionNoParams();

  function handleUserCancel() {
    navigate(`/imaging/${section}`);
  }

  return (
    <div className={styles.UserControls}>
      <div className={styles.controls}>
        <GoButton type="cancel" clickFunction={handleUserCancel}>
          CANCEL
        </GoButton>
        <UpdateStatus />
        <EditOrder />
      </div>
    </div>
  );
}

export default UserControls;
