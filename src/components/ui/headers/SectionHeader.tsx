import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

interface Props {
  children: ReactNode;
}

function SectionHeader({ children }: Props) {
  return <section className={styles.SectionHeader}>{children}</section>;
}

export default SectionHeader;
