type Props = {
  width?: string;
  color1?: string;
  color2?: string;
};

const Notification1 = ({ width, color1, color2 }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.69 21.69"
      width={width || "20px"}
    >
      <circle
        cx="10.86"
        cy="18.38"
        r="3.18"
        style={{ fill: color2 || "#111" }}
      />
      <path
        d="m20.28,18.39H1.44c-1.05,0-1.68-1.15-1.13-2.04l1.25-2.01c.75-1.21,1.15-2.6,1.15-4.02v-2.03c0-4.51,3.65-8.16,8.16-8.16h0c4.51,0,8.16,3.65,8.16,8.16v2.03c0,1.42.4,2.81,1.14,4.01l1.25,2.01c.55.89-.09,2.04-1.13,2.04Z"
        style={{ fill: color1 || "#a8a8a8" }}
      />
    </svg>
  );
};

export default Notification1;
