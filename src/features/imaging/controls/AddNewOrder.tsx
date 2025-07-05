import NewDocument from "@/icons/NewDocument";
import { useNavigate } from "react-router-dom";
import styles from "./AddNewOrder.module.css";

function AddNewOrder() {
  const navigate = useNavigate();

  return (
    <div
      className={styles.AddNewOrder}
      onClick={() => navigate("/imaging/create/new-order")}
    >
      <span className={styles.text}>NEW ORDER</span>
      <NewDocument size={"2rem"} />
    </div>
  );
}

export default AddNewOrder;
