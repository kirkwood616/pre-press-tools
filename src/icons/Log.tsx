interface Props {
  size: string;
  fill?: string;
}

function Log({ size, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        fill={fill ? fill : "currentColor"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 12h8m-8 6h8M13 6h8M3 12h1m-1 6h1M3 6h1m4 6h1m-1 6h1M8 6h1"
      ></path>
    </svg>
  );
}

export default Log;
