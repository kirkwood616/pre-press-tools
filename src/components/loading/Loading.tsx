import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.Loading}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
