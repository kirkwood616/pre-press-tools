import MenuDots from "../../icons/MenuDots";
import ViewOrder from "../../icons/ViewOrder";
import styles from "./ImagingTable.module.css";

interface Props {}

const data = [
  {
    due: "6/19",
    order: "123456",
  },
  {
    due: "6/19",
    order: "123457",
  },
  {
    due: "6/20",
    order: "123458",
  },
  {
    due: "6/21",
    order: "123459",
  },
];

function ImagingTable({}: Props) {
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
          {data.map((item, index) => (
            <tr className={styles.queue} key={item.order + index}>
              <td>
                <input type="checkbox" name="check" id="check" />
              </td>
              <td className={styles.due}>{item.due}</td>
              <td>{item.order}</td>
              <td className={styles.thin}>
                <button className={styles.view}>
                  <ViewOrder size="1.25rem" fill="var(--dark-gray)" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImagingTable;
