import type { ReactNode } from "react";
import styles from "./OrderControls.module.css";

interface Props {
  children: ReactNode;
}

function OrderControls({ children }: Props) {
  return <div className={styles.OrderControls}>{children}</div>;
}

export default OrderControls;
