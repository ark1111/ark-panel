import React from "react";

type Props = {
  width?: string;
  color1?: string;
  color2?: string;
};

const Logout1 = ({ width, color1, color2 }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23.41 25.96"
      width={width || "20px"}
    >
      <rect
        x=".15"
        y=".13"
        width="19.07"
        height="25.75"
        rx="4"
        ry="4"
        style={{ fill: color1 || "#a8a8a8" }}
      />
      <path
        d="m16.19,17.01v-1.85h-7.59c-1.19,0-2.16-.96-2.16-2.16h0c0-1.19.96-2.16,2.16-2.16h7.59s0-1.85,0-1.85c0-.72.82-1.13,1.4-.7l5.37,4c.47.35.47,1.05,0,1.4l-5.37,4c-.58.43-1.4.02-1.4-.7Z"
        style={{ fill: color2 || "#111" }}
      />
    </svg>
  );
};

export default Logout1;
