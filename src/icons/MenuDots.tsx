interface Props {
  size: string;
  fill?: string;
}

function MenuDots({ size, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
    >
      <path
        fill={fill ? fill : "currentColor"}
        d="M10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
      ></path>
    </svg>
  );
}

export default MenuDots;
