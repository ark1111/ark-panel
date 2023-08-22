type Props = {
  width?: string;
  color1?: string;
  color2?: string;
};

const Moon1 = ({ width, color1, color2 }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.05 21.4"
      width={width || "20px"}
    >
      <path
        d="m19.79,15.31c.89-.15,1.49.85.94,1.57-2.06,2.71-5.44,4.47-9.26,4.47C5.19,21.34.1,16.57.1,10.67.1,6.99,2.08,3.75,5.1,1.83c.72-.46,1.62.2,1.46,1.04-.12.63-.19,1.27-.19,1.93,0,5.9,5.09,10.68,11.37,10.68.7,0,1.38-.06,2.05-.17Z"
        style={{ fill: color1 || "#a8a8a8" }}
      />
      <path
        d="m16.01,4.1l-1.42.66c-.15.07-.26.18-.33.33l-.66,1.42c-.24.52-.99.52-1.23,0l-.66-1.42c-.07-.15-.18-.26-.33-.33l-1.42-.66c-.52-.24-.52-.99,0-1.23l1.42-.66c.15-.07.26-.18.33-.33l.66-1.42c.24-.52.99-.52,1.23,0l.66,1.42c.07.15.18.26.33.33l1.42.66c.52.24.52.99,0,1.23Z"
        style={{ fill: color2 || "#111" }}
      />
      <path
        d="m19.52,9.67l-.97.45c-.1.05-.18.13-.23.23l-.45.97c-.17.36-.68.36-.85,0l-.45-.97c-.05-.1-.13-.18-.23-.23l-.97-.45c-.36-.17-.36-.68,0-.85l.97-.45c.1-.05.18-.13.23-.23l.45-.97c.17-.36.68-.36.85,0l.45.97c.05.1.13.18.23.23l.97.45c.36.17.36.68,0,.85Z"
        style={{ fill: color2 || "#111" }}
      />
    </svg>
  );
};

export default Moon1;