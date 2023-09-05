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
  SpanUnit,
  Title,
} from "./InfoCard.styled";
import { useTranslate } from "../../../../locals/useTranslate";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { sampleChartData } from "../mockData";
import Groth1 from "../../../../assets/Groth1";

const statusColorList = ["#AEC670", "#ED413E"];
const faUnit = ["rial", "toman"];

type Props = {
  title: string;
  amount: number;
  unit: string;
  percent: number;
};

const InfoCard = ({ title, amount, unit, percent }: Props) => {
  const { translate, language } = useTranslate();
  return (
    <Box>
      <Title>{translate(title)}</Title>
      <Contents>
        <Details>
          <DetailsMainText>
            {!faUnit.includes(unit) && unit}
            {Math.abs(amount)}
            {faUnit.includes(unit) && <SpanUnit> {translate(unit)}</SpanUnit>}
          </DetailsMainText>
          <DetailsSubTextContainer>
            <IconContainer $isRotate={amount < 0}>
              <Groth1
                color={amount > 0 ? statusColorList[0] : statusColorList[1]}
              />
            </IconContainer>
            <DetailsSubText>
              <Span
                $color={amount > 0 ? statusColorList[0] : statusColorList[1]}
              >
                {language !== "fa" ? (amount < 0 ? "-" : "+") : ""}
                {percent}%{language === "fa" ? (amount < 0 ? "-" : "+") : ""}
              </Span>{" "}
              {translate("than_last_week")}
            </DetailsSubText>
          </DetailsSubTextContainer>
        </Details>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={sampleChartData}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={statusColorList[0]}
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="100%"
                    stopColor={statusColorList[0]}
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={statusColorList[1]}
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="100%"
                    stopColor={statusColorList[1]}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="uv"
                stroke={amount > 0 ? statusColorList[0] : statusColorList[1]}
                fill={amount > 0 ? "url(#colorUv)" : "url(#colorUv2)"}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Contents>
    </Box>
  );
};

export default InfoCard;
