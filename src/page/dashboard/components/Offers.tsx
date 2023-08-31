import { useState } from "react";
import {
  Box,
  Header,
  HeaderButton,
  HeaderButtonText,
  HeaderTitle,
  List,
  ListItem,
  ListItemImageBox,
  ListItemInfo,
  ListItemPoint,
} from "./Offers.styled";
import { useTranslate } from "../../../locals/useTranslate";

type Props = {};

const Offers = (props: Props) => {
  const { translate } = useTranslate();
  const [data, setData] = useState([]);
  return (
    <Box>
      <Header>
        <HeaderTitle>{translate("Offers")}</HeaderTitle>
        <HeaderButton>
          <HeaderButtonText>{translate("All")}</HeaderButtonText>
        </HeaderButton>
      </Header>
      <List>
        <ListItem>
            <ListItemImageBox></ListItemImageBox>
            <ListItemInfo></ListItemInfo>
            <ListItemPoint></ListItemPoint>
        </ListItem>
      </List>
    </Box>
  );
};

export default Offers;
