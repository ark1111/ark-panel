import React, { useState } from "react";
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
import { sampleAnalyticData } from "../mockData";

type Props = {};

const Analytics = (props: Props) => {
  const { translate, language } = useTranslate();
  const [data, setData] = useState(sampleAnalyticData);

  const createSubtitle = (text: string, diff: number) => {
    return text.replace("x", String(diff));
  };

  const convertAmount = (amount: number) => {
    if (amount >= 1000 && amount < 1000000) {
      return (amount / 1000).toFixed(1) + "k";
    } else if (amount >= 1000000) {
      return (amount / 1000000).toFixed(1) + "m";
    }
  };
  return (
    <Box>
      {data?.map((item) => (
        <BoxItem key={item.id}>
          <BoxItemDetails>
            <Header>
              <Title>{translate(item.title)}</Title>
              <Subtitle>
                {createSubtitle(translate(item.subtitle), item.diff)}
              </Subtitle>
            </Header>
            <Items>
              <ItemsTitle>{translate(item.detailsTitle)}</ItemsTitle>
              <ItemsContainer>
                {item.details.map((detailItem) => (
                  <ItemBox key={detailItem.id}>
                    <ItemBoxValue>
                      {detailItem.isPercent
                        ? detailItem.amount
                        : convertAmount(detailItem.amount)}
                      {detailItem.isPercent && "%"}
                    </ItemBoxValue>
                    <ItemBoxTitle>{detailItem.title}</ItemBoxTitle>
                  </ItemBox>
                ))}
              </ItemsContainer>
            </Items>
          </BoxItemDetails>
          <BoxItemImage></BoxItemImage>
        </BoxItem>
      ))}
    </Box>
  );
};

export default Analytics;
