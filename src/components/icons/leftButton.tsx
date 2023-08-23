import { FC, SVGProps } from "react";

export const LeftButton: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="27" cy="27" r="27" fill="white" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.4148 27.1669C24.1 26.8521 24.1 26.3418 24.4148 26.0271L29.2506 21.1912C29.5653 20.8765 30.0757 20.8765 30.3904 21.1912C30.7052 21.506 30.7052 22.0163 30.3904 22.3311L26.1245 26.597L30.3904 30.8629C30.7052 31.1776 30.7052 31.688 30.3904 32.0027C30.0757 32.3175 29.5653 32.3175 29.2506 32.0027L24.4148 27.1669Z"
      fill="#121214"
    />
  </svg>
);
