import styles from "./ButtonCloseX.module.css";

interface Props {
  clickFunction?: () => void;
}

function ButtonCloseX({ clickFunction }: Props) {
  return (
    <button className={styles.ButtonCloseX} onClick={clickFunction}></button>
  );
}

export default ButtonCloseX;
