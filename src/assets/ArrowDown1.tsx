type Props = {
  width?: string;
  color?: string;
  strokeWidth?: string;
};

const ArrowDown1 = ({ width, color, strokeWidth }: Props) => {
  return (
    <div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "20px"}
        viewBox="0 0 24.57 10.45"
      >
        <polyline
          points="24.02 .57 12.29 9.91 .56 .57"
          style={{
            fill: "none",
            stroke: color || "#111",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: strokeWidth || "3px",
          }}
        />
      </svg>
    </div>
  );
};

export default ArrowDown1;
