import { useEffect, useState } from "react";
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
import EventList from "./EventList";
import { createWeek } from "./functions";
import Day from "./Day";

type Props = {};
const Events = (props: Props) => {
  const { translate, language } = useTranslate();
  const [activeTab, setAtiveTab] = useState("week");
  const [today, setToday] = useState(0);
  const [weekList, setWeekList] = useState<
    { id: number; day: string; date: number }[]
  >([]);
  const [activeDay, setActiveDay] = useState(2);

  //createWeek-------------------
  useEffect(() => {
    let { week, todayIndex } = createWeek(language);
    setWeekList([...week]);
    setActiveDay(todayIndex);
    setToday(todayIndex);
  }, [language]);
  //-----------------------------

  const changeTabHandler = (value: string) => {
    setAtiveTab(value);
    if (value === "day") {
      setActiveDay(today);
    }
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
      {activeTab === "day" && <Day today={weekList[today]} />}
      {activeTab === "week" && (
        <Week
          list={weekList}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
        />
      )}
      <EventList />
    </Box>
  );
};

export default Events;
