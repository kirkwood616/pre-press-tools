import { useContext } from "react";
import { Link } from "react-router-dom";
import ImagingContext from "../../../../context/ImagingContext";
import MenuDots from "../../../../icons/MenuDots";
import ViewOrder from "../../../../icons/ViewOrder";
import styles from "./ImagingTable.module.css";

function ImagingTable() {
  const { records } = useContext(ImagingContext);

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
                <Link to={item.id!}>
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
