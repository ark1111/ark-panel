type Props = {
  width?: string;
  color1?: string;
  color2?: string;
};

const Home1 = ({ width, color1, color2 }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.9 27.68"
      width={width || "20px"}
    >
      <path
        d="m26.03,11.9v11.43c0,2.31-1.88,4.18-4.19,4.18H7.09c-2.31,0-4.19-1.87-4.19-4.18v-11.43l9.45-7.51h4.24l9.44,7.51Z"
        style={{ fill: color1 || "#a8a8a8" }}
      />
      <polyline
        points="26.2 12.04 26.03 11.9 16.59 4.39 14.47 2.7 12.35 4.39 2.9 11.9 2.73 12.04"
        style={{
          fill: "none",
          stroke: color2 || "#111111",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "5px",
        }}
      />
      <g>
        <rect
          x="7.61"
          y="15.38"
          width="4.16"
          height="5.75"
          rx="1.11"
          ry="1.11"
          style={{
            fill: color2 || "#111111",
            stroke: "#111111",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <rect
          x="17.17"
          y="15.38"
          width="4.16"
          height="5.75"
          rx="1.11"
          ry="1.11"
          style={{
            fill: color2 || "#111111",
            stroke: "#111111",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </g>
      <rect
        x="20.77"
        y=".74"
        width="5.26"
        height="9.57"
        rx="1.11"
        ry="1.11"
        style={{
          fill: color2 || "#111111",
          stroke: "#111111",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  );
};

export default Home1;
