import { FC, SVGProps } from "react";

export const RightButton: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="27"
      cy="27"
      r="27"
      transform="matrix(-1 0 0 1 54 0)"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M29.5852 27.1669C29.9 26.8521 29.9 26.3418 29.5852 26.0271L24.7494 21.1912C24.4347 20.8765 23.9243 20.8765 23.6096 21.1912C23.2948 21.506 23.2948 22.0163 23.6096 22.3311L27.8755 26.597L23.6096 30.8629C23.2948 31.1776 23.2948 31.688 23.6096 32.0027C23.9243 32.3175 24.4347 32.3175 24.7494 32.0027L29.5852 27.1669Z"
      fill="#121214"
    />
  </svg>
);
