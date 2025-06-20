import styles from "./PageHeader.module.css";

interface Props {
  title: string;
}

function PageHeader({ title }: Props) {
  return <header className={styles.PageHeader}>{title}</header>;
}

export default PageHeader;
