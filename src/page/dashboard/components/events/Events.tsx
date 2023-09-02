import { useState } from "react";
import { useTranslate } from "../../../../locals/useTranslate";
import {
  Box,
  Header,
  HeaderTitle,
  TabButton,
  TabButtonDivider,
  TabButtonItem,
} from "./Events.styled";
import Week from "./Week";

type Props = {};

const weekData = [
  {
    id: 1,
    day: "M",
    date: 8,
  },
  {
    id: 2,
    day: "T",
    date: 9,
  },
  {
    id: 3,
    day: "W",
    date: 10,
  },
  {
    id: 4,
    day: "T",
    date: 11,
  },
  {
    id: 5,
    day: "F",
    date: 12,
  },
  {
    id: 6,
    day: "S",
    date: 13,
  },
  {
    id: 7,
    day: "S",
    date: 14,
  },
];

const Events = (props: Props) => {
  const { translate, language } = useTranslate();
  const [activeTab, setAtiveTab] = useState("week");
  const [weekList, setWeekList] = useState(weekData);
  const [activeDay, setActiveDay] = useState(2);
  const changeTabHandler = (value: string) => {
    setAtiveTab(value);
  };
  return (
    <Box>
      <Header>
        <HeaderTitle>{translate("Events")}</HeaderTitle>
        <TabButton>
          <TabButtonItem
            $isActive={activeTab === "week"}
            onClick={() => changeTabHandler("week")}
          >
            {translate("Week")}
          </TabButtonItem>
          <TabButtonDivider></TabButtonDivider>
          <TabButtonItem
            $isActive={activeTab === "day"}
            onClick={() => changeTabHandler("day")}
          >
            {translate("Day")}
          </TabButtonItem>
        </TabButton>
      </Header>
      <Week list={weekList} activeDay={activeDay} setActiveDay={setActiveDay} />
    </Box>
  );
};

export default Events;
