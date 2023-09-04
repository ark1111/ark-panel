import React from "react";
import { Box, IconBox } from "./MoreBox.styled";
import Edit1 from "../../../../assets/Edit1";
import Trash1 from "../../../../assets/Trash1";
import Close1 from "../../../../assets/Close1";
import { useTheme } from "styled-components";
import { useTranslate } from "../../../../locals/useTranslate";

type Props = {
  setActiveMoreBoxIndex: Function;
};

const MoreBox = ({ setActiveMoreBoxIndex }: Props) => {
  const theme = useTheme();
  const { language } = useTranslate();
  return (
    <Box $isRtl={language === "fa"}>
      <IconBox>
        <Edit1
          color1={theme.colors.iconColor1}
          color2={theme.colors.iconColor2}
        />
      </IconBox>
      <IconBox>
        <Trash1
          color1={theme.colors.iconColor1}
          color2={theme.colors.iconColor2}
        />
      </IconBox>
      <IconBox onClick={() => setActiveMoreBoxIndex()}>
        <Close1
          color1={theme.colors.iconColor1}
          color2={theme.colors.iconColor2}
        />
      </IconBox>
    </Box>
  );
};

export default MoreBox;
