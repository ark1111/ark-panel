import React from "react";
import { Box, BoxItem, DateText, DayText } from "./Week.styled";

type Props = {
  list: {
    id: number;
    day: string;
    date: number;
  }[];
  activeDay: number;
  setActiveDay: Function;
};

const Week = ({ list, activeDay, setActiveDay }: Props) => {
    
  const ChangeDay = (index: number) => {
    setActiveDay(index);
  };
  return (
    <Box>
      {list.map((item, index) => (
        <BoxItem
          key={item.id}
          $isActive={index === activeDay}
          onClick={() => ChangeDay(index)}
        >
          <DateText>
            {item.date < 10 && "0"}
            {item.date}
          </DateText>
          <DayText>{item.day}</DayText>
        </BoxItem>
      ))}
    </Box>
  );
};

export default Week;
