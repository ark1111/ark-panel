type Props = {
  width?: string;
  color1?: string;
  color2?: string;
};

const Search1 = ({ width, color1, color2 }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.24 15.51"
      width={width || "20px"}
    >
      <rect
        x="9.61"
        y="10.13"
        width="2.77"
        height="5.58"
        rx="1.39"
        ry="1.39"
        transform="translate(-5.42 8.64) rotate(-35)"
        style={{ fill: color2 || "#231f20" }}
      />
      <circle
        cx="6.5"
        cy="6.51"
        r="6.43"
        style={{ fill: color1 || "#a8a8a8" }}
      />
    </svg>
  );
};

export default Search1;
