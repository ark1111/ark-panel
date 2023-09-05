type Props = {
  width?: string;
  color?: string;
  strokeWidth?: string;
};
const Groth1 = ({ width, color, strokeWidth }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 8.16"
      width={width || "20px"}
    >
      <path
        d="m.56,7.63L5.06,3.13c.56-.56,1.47-.56,2.03,0l1.87,1.87c.56.56,1.47.56,2.03,0L15.32.66"
        style={{
          fill: "none",
          stroke: color || "#111",
          strokeMiterlimit: 10,
          strokeWidth: strokeWidth || "1px",
        }}
      />
      <path
        d="m11.19.8l3.8-.27c.26-.02.47.2.45.45l-.27,3.8"
        style={{
          fill: "none",
          stroke: color || "#111",
          strokeMiterlimit: 10,
          strokeWidth: strokeWidth || "1px",
        }}
      />
    </svg>
  );
};

export default Groth1;
