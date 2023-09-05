import moment from "moment";
import { useTranslate } from "../../../../locals/useTranslate";
import { Box } from "./Day.styled";

type Props = {
  today: {
    id: number;
    day: string;
    date: number;
  };
};

const Day = ({ today }: Props) => {
  const { language } = useTranslate();

  const getDate = (date: number) => {
    if (language === "fa") {
      return new Intl.DateTimeFormat("fa-IR", { dateStyle: "long" }).format(date);
    } else {
      return moment().format("MMMM Do YYYY");
    }
  };
  return <Box>{getDate(today.date)}</Box>;
};

export default Day;
