import { useTheme } from "styled-components";
import Search1 from "../../assets/Search1";
import { Box, Input } from "./index.styled";

type Props = {};

const SearchBox = (props: Props) => {
  const theme = useTheme();
  return (
    <Box>
      <Search1
        color1={theme.colors.iconColor1}
        color2={theme.colors.iconColor2}
      />
      <Input></Input>
    </Box>
  );
};

export default SearchBox;
