import MenuDots from "@/icons/MenuDots";
import ViewOrder from "@/icons/ViewOrder";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useImagingRecordsStore } from "@/stores/imaging/useImagingRecordsStore";
import { Link } from "react-router-dom";
import styles from "./ImagingTable.module.css";

function ImagingTable() {
  const { records } = useImagingRecordsStore();
  const { setRecord } = useImagingOrderStore();

  return (
    <div className={styles.container}>
      <table className={styles.ImagingTable}>
        <thead>
          <tr>
            <th className={styles.thin}>
              <input type="checkbox" name="checkAll" id="checkAll" />
            </th>
            <th className={styles.due}>
              <h2>Due</h2>
            </th>
            <th>
              <h2>Order</h2>
            </th>
            <th>
              <button className={styles.options}>
                <MenuDots size="1.25rem" fill="var(--light-gray)" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr className={styles.queue} key={item.order + index}>
              <td>
                <input type="checkbox" name="check" id="check" />
              </td>
              <td className={styles.due}>{item.due}</td>
              <td>{item.order}</td>
              <td className={styles.thin}>
                <Link to={item.id!} onClick={() => setRecord(records[index])}>
                  <button className={styles.view}>
                    <ViewOrder size="1.25rem" fill="var(--dark-gray)" />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImagingTable;
