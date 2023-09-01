type Props = {
  width?: string;
  color1?: string;
  color2?: string;
};

const Close1 = ({ width, color1, color2 }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23.3 23.24"
      width={width || "20px"}
    >
      <rect
        x=".12"
        y=".09"
        width="23.07"
        height="23.07"
        rx="3.94"
        ry="3.94"
        style={{ fill: color1 || "#a8a8a8" }}
      />
      <g>
        <rect
          x="10.71"
          y="4.17"
          width="1.87"
          height="14.9"
          rx=".72"
          ry=".72"
          transform="translate(11.63 -4.83) rotate(45)"
          style={{ fill: color2 || "#111" }}
        />
        <rect
          x="10.71"
          y="4.17"
          width="1.87"
          height="14.9"
          rx=".72"
          ry=".72"
          transform="translate(-4.8 11.64) rotate(-45)"
          style={{ fill: color2 || "#111" }}
        />
      </g>
    </svg>
  );
};

export default Close1;
