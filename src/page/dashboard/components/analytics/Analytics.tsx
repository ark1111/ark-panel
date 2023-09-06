import React from "react";
import {
  Box,
  BoxItem,
  BoxItemDetails,
  BoxItemImage,
  Header,
  Items,
  ItemsTitle,
  Subtitle,
  Title,
} from "./Analytics.styled";
import { useTranslate } from "../../../../locals/useTranslate";

type Props = {};

const Analytics = (props: Props) => {
  const { translate, language } = useTranslate();

  const createSubtitle = (text: string) => {
    return text.replace("x", "10");
  };
  return (
    <Box>
      <BoxItem>
        <BoxItemDetails>
          <Header>
            <Title>{translate("website_analytics")}</Title>
            <Subtitle>
              {createSubtitle(translate("website_analytics_subtitle"))}
            </Subtitle>
          </Header>
          <Items>
            <ItemsTitle>{translate("Traffic")}</ItemsTitle>
          </Items>
        </BoxItemDetails>
        <BoxItemImage></BoxItemImage>
      </BoxItem>
    </Box>
  );
};

export default Analytics;
