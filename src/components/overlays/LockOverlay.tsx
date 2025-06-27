import styles from "./LockOverlay.module.css";

interface Props {
  message: string;
}

function LockOverlay({ message }: Props) {
  return (
    <div className={styles.LockOverlay}>
      <div className={styles.lockMessage}>{message}</div>
    </div>
  );
}

export default LockOverlay;
