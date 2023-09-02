import { useState } from "react";
import { useTranslate } from "../../../locals/useTranslate";
import {
  Box,
  Header,
  HeaderTitle,
  TabButton,
  TabButtonDivider,
  TabButtonItem,
} from "./Events.styled";

type Props = {};

const Events = (props: Props) => {
  const { translate, language } = useTranslate();
  const [activeTab, setAtiveTab] = useState("week");
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
    </Box>
  );
};

export default Events;
