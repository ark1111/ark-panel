import { useState } from "react";
import {
  Box,
  Header,
  HeaderButton,
  HeaderButtonText,
  HeaderTitle,
  List,
  ListItem,
  ListItemImage,
  ListItemImageBox,
  ListItemInfo,
  ListItemPoint,
  ListItemSubitle,
  ListItemTitle,
} from "./Offers.styled";
import { useTranslate } from "../../../locals/useTranslate";
import { OffersList } from "./mockData";
import ArrowRight1 from "../../../assets/ArrowRight1";
import { useTheme } from "styled-components";
import ArrowLeft1 from "../../../assets/ArrowLeft1";

type Props = {};

const statusColorList = ["#AEC670", "#FAAB01", "#ED413E"];

const getStatusColor = (point: number): number => {
  let colorIndex;
  if (point >= 4) {
    colorIndex = 0;
  } else if (point < 4 && point >= 3) {
    colorIndex = 1;
  } else {
    colorIndex = 2;
  }
  return colorIndex;
};

const Offers = (props: Props) => {
  const { translate, language } = useTranslate();
  const theme = useTheme();
  const [data, setData] = useState(OffersList);

  return (
    <Box>
      <Header>
        <HeaderTitle>{translate("Offers")}</HeaderTitle>
        <HeaderButton>
          <HeaderButtonText>{translate("All")}</HeaderButtonText>
          {language === "fa" ? (
            <ArrowLeft1
              width="5px"
              strokeWidth="2"
              color={theme.colors.surfaceText}
            />
          ) : (
            <ArrowRight1
              width="5px"
              strokeWidth="2"
              color={theme.colors.surfaceText}
            />
          )}
        </HeaderButton>
      </Header>
      <List>
        {data.map((item) => (
          <ListItem key={item?.id}>
            <ListItemImageBox>
              <ListItemImage src={item.image}></ListItemImage>
            </ListItemImageBox>
            <ListItemInfo>
              <ListItemTitle>{item.title}</ListItemTitle>
              <ListItemSubitle>{item.subtitle}</ListItemSubitle>
            </ListItemInfo>
            <ListItemPoint $color={statusColorList[getStatusColor(item.point)]}>
              {item.point}
            </ListItemPoint>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Offers;
