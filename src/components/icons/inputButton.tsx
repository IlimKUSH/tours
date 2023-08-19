import { FC, SVGProps } from "react";

export const InputButton: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="14.5" cy="14.5" r="14.5" fill="white" />
    <path
      d="M13 18L17 14L13 10"
      stroke="#121214"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
