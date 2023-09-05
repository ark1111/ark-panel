import React from "react";
import {
  Box,
  ChartContainer,
  Contents,
  Details,
  DetailsMainText,
  DetailsSubText,
  DetailsSubTextContainer,
  IconContainer,
  Span,
  Title,
} from "./InfoCard.styled";
import { useTranslate } from "../../../../locals/useTranslate";

const statusColorList = ["#AEC670", "#ED413E"];

type Props = {};

const InfoCard = (props: Props) => {
  const { translate, language } = useTranslate();
  return (
    <Box>
      <Title>{translate("total_incom")}</Title>
      <Contents>
        <Details>
          <DetailsMainText>$250964.00</DetailsMainText>
          <DetailsSubTextContainer>
            <IconContainer></IconContainer>
            <DetailsSubText>
              <Span $color={statusColorList[0]}>+12.03%</Span> {" "}
              than last week
            </DetailsSubText>
          </DetailsSubTextContainer>
        </Details>
        <ChartContainer></ChartContainer>
      </Contents>
    </Box>
  );
};

export default InfoCard;
