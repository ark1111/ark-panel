type Props = {
  width?: string;
  color1?: string;
  color2?: string;
};

const Trash1 = ({ width, color1, color2 }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.53 22.6"
      width={width || "20px"}
    >
      <path
        d="m20.49,3.76h-6.14c0-1.97-1.6-3.57-3.58-3.57s-3.58,1.6-3.58,3.57H1.04c-.49,0-.9.4-.9.9s.4.9.9.9h.95c.46,0,.84.35.89.8l1.57,14.52c.09.87.83,1.53,1.7,1.53h9.24c.87,0,1.6-.66,1.7-1.53l1.57-14.52c.05-.45.43-.8.89-.8h.95c.49,0,.9-.4.9-.9s-.4-.9-.9-.9Zm-11.72,0c0-1.1.89-2,2-2s2,.9,2,2h-3.99Z"
        style={{ fill: color1 || "#a8a8a8" }}
      />
      <g>
        <rect
          x="7.36"
          y="8.61"
          width="1.73"
          height="9.73"
          rx=".74"
          ry=".74"
          style={{ fill: color2 || "#111" }}
        />
        <rect
          x="12.44"
          y="8.61"
          width="1.73"
          height="9.73"
          rx=".74"
          ry=".74"
          style={{ fill: color2 || "#111" }}
        />
      </g>
    </svg>
  );
};

export default Trash1;
