import React, { useEffect, useState } from "react";
import {
  Box,
  BoxItem,
  BoxItemDetails,
  BoxItemImage,
  Dots,
  DotsItem,
  Header,
  Image,
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
import { useTheme } from "styled-components";

type Props = {};

const Analytics = (props: Props) => {
  const { translate, language } = useTranslate();
  const theme = useTheme();
  const [data, setData] = useState(sampleAnalyticData);
  const [dots, setDots] = useState<number[]>([]);
  const [move, setMove] = useState(0);
  const [themeIndex, setThemeIndex] = useState(1);

  useEffect(() => {
    let index = Number(localStorage.getItem("themeIndex"));
    setThemeIndex(index);
  }, [theme]);

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
      newArray.push(i + 1);
    }
    setDots([...newArray]);
  }, []);

  const changeMove = (index: number) => {
    setMove(index);
  };

  const createSubtitle = (text: string, diff: number) => {
    return text.replace("x", String(diff));
  };

  const convertAmount = (amount: number) => {
    if (amount >= 1000 && amount < 1000000) {
      return (amount / 1000).toFixed(1) + "k";
    } else if (amount >= 1000000) {
      return (amount / 1000000).toFixed(1) + "m";
    } else {
      return amount;
    }
  };
  return (
    <Box>
      {data?.map((item, index) => (
        <BoxItem
          key={item.id}
          $move={move}
          $isRtl={language === "fa"}
          $isActive={index === move}
        >
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
                    <ItemBoxTitle>{translate(detailItem.title)}</ItemBoxTitle>
                  </ItemBox>
                ))}
              </ItemsContainer>
            </Items>
          </BoxItemDetails>
          <BoxItemImage>
            <Image
              src={themeIndex === 1 ? item.image_dark : item.image}
            ></Image>
          </BoxItemImage>
        </BoxItem>
      ))}
      <Dots $isRtl={language === "fa"}>
        {dots.map((item, index) => (
          <DotsItem
            key={item}
            onClick={() => changeMove(index)}
            $isActive={index === move}
          ></DotsItem>
        ))}
      </Dots>
    </Box>
  );
};

export default Analytics;
