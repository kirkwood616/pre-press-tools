import styles from "./PocketIcon.module.css";

interface Props {
  size: string;
  fill?: string;
  animate?: boolean;
}

function PocketIcon({ size, fill, animate }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={animate ? styles.PocketIcon__animated : styles.PocketIcon}
    >
      <path
        fill={fill ? fill : "currentColor"}
        d="M4 3h16v14.63l-8 4.62l-8-4.62zm14 6H6v7.5l6 3.44l6-3.44zm0-4H6v2h12z"
      ></path>
    </svg>
  );
}

export default PocketIcon;
