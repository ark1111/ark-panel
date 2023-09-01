type Props = {
  width?: string;
  color?: string;
  strokeWidth?: string;
};

const ArrowLeft1 = ({ width, color, strokeWidth }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20px"}
      viewBox="0 0 6.83 15.51"
    >
      <polyline
        points="6.26 .6 .56 7.75 6.26 14.91"
        style={{
          fill: "none",
          stroke: color || "#111",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: strokeWidth || "3px",
        }}
      />
    </svg>
  );
};

export default ArrowLeft1;
