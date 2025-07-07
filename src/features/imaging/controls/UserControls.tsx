import GoButton from "@/components/ui/buttons/GoButton";
import EditOrder from "@/features/imaging/controls/EditOrder";
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

  function handleUserSet() {}

  return (
    <div className={styles.UserControls}>
      <div className={styles.controls}>
        <EditOrder />
        <GoButton type="cancel" clickFunction={handleUserCancel}>
          CANCEL
        </GoButton>
        <GoButton type="primary" clickFunction={handleUserSet}>
          SET AS NEXT
        </GoButton>
        <GoButton type="secondary">MOVE TO PREVIOUS</GoButton>
      </div>
    </div>
  );
}

export default UserControls;
