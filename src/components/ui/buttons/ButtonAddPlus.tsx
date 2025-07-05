import styles from "./ButtonAddPlus.module.css";

interface ButtonAddProps {
  clickFunction?: () => void;
}

function ButtonAddPlus({ clickFunction }: ButtonAddProps) {
  return (
    <button className={styles.ButtonAddPlus} onClick={clickFunction}></button>
  );
}

export default ButtonAddPlus;
