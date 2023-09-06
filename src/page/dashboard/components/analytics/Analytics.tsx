import React from "react";
import {
  Box,
  BoxItem,
  BoxItemDetails,
  BoxItemImage,
  Header,
  ItemBox,
  ItemBoxTitle,
  ItemBoxValue,
  Items,
  ItemsContainer,
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
            <ItemsContainer>
              {[1,2,3,4].map((item)=>(
                <ItemBox>
                  <ItemBoxTitle>hello</ItemBoxTitle>
                  <ItemBoxValue>stunning...</ItemBoxValue>
                </ItemBox>
              ))}
            </ItemsContainer>
          </Items>
        </BoxItemDetails>
        <BoxItemImage></BoxItemImage>
      </BoxItem>
    </Box>
  );
};

export default Analytics;
