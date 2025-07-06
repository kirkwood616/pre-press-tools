import useLocationRoutes from "@/hooks/useLocationRoutes";
import MenuDots from "@/icons/MenuDots";
import ViewOrder from "@/icons/ViewOrder";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import { useImagingRecordsStore } from "@/stores/imaging/useImagingRecordsStore";
import { Link } from "react-router-dom";
import styles from "./ImagingTable.module.css";

function ImagingTable() {
  const { records } = useImagingRecordsStore();
  const { setOrder } = useImagingOrderStore();
  const { endPathName } = useLocationRoutes();
  const statusRecords = records
    .filter((rec) => {
      return rec.status === endPathName;
    })
    .sort((a, b) => new Date(a.due).valueOf() - new Date(b.due).valueOf());

  if (statusRecords.length < 1)
    return (
      <div className={styles.container}>
        <table className={styles.ImagingTable}>
          <thead>
            <tr>
              <th>
                <h2>NO {endPathName.toUpperCase()} ORDERS</h2>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    );

  if (statusRecords.length > 0)
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
            {statusRecords.map((item, index) => (
              <tr
                className={
                  item.isLocked
                    ? `${styles.queue} ${styles.lockedListItem}`
                    : styles.queue
                }
                key={item.order + index}
              >
                <td>
                  <input type="checkbox" name="check" id="check" />
                </td>
                <td className={styles.due}>{item.due}</td>
                <td>{item.order}</td>
                <td className={styles.thin}>
                  <Link to={item.id!} onClick={() => setOrder(records[index])}>
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
