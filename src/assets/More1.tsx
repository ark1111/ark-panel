type Props = {
  width?: string;
  color?: string;
};

const More1 = ({ width, color }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20px"}
      viewBox="0 0 3.76 14.51"
    >
      <circle
        cx="1.88"
        cy="1.88"
        r="1.78"
        style={{ fill: color || "#231f20" }}
      />
      <circle
        cx="1.88"
        cy="12.63"
        r="1.78"
        style={{ fill: color || "#231f20" }}
      />
      <circle
        cx="1.88"
        cy="7.26"
        r="1.78"
        style={{ fill: color || "#231f20" }}
      />
    </svg>
  );
};

export default More1;
