type Props = {
  width?: string;
  color?: string;
  strokeWidth?: string;
};

const ArrowRight1 = ({ width, color, strokeWidth }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20px"}
      viewBox="0 0 6.66 15.07"
    >
      <polyline
        points=".55 .54 6.11 7.53 .55 14.53"
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

export default ArrowRight1;
