import { useTranslate } from "../../../../locals/useTranslate";
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
  const { language } = useTranslate();

  const ChangeDay = (index: number) => {
    setActiveDay(index);
  };

  const getDateHandler = (date: number) => {
    let d = new Date(date);
    if (language !== "fa") {
      return d.getDate();
    } else {
      return Number(
        new Intl.DateTimeFormat("en-US-u-ca-persian", {
          day: "numeric",
        }).format(d)
      );
    }
  };

  return (
    <Box>
      {list.map((item, index) => (
        <BoxItem
          key={item.id}
          $isActive={index === activeDay}
          onClick={() => ChangeDay(index)}
        >
          <DateText $isActive={index === activeDay}>
            {getDateHandler(item.date) < 10 && "0"}
            {getDateHandler(item.date)}
          </DateText>
          <DayText $isActive={index === activeDay}>{item.day}</DayText>
        </BoxItem>
      ))}
    </Box>
  );
};

export default Week;
