import { FC, SVGProps } from "react";

export const InputButton: FC<SVGProps<SVGSVGElement>> = ({
  width = "29",
  height = "29",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="14.5" cy="14.5" r="14.5" fill="white" />
    <path
      d="M13 18L17 14L13 10"
      stroke="#121214"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
