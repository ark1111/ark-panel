import React, { useState } from "react";
import {
  DateText,
  IconBox,
  List,
  ListItem,
  ListItemInfo,
  ListItemInfoHeader,
  ListItemInfoTime,
  ListItemInfoTitle,
  ListItemTimeAndDate,
  Members,
  Time,
} from "./EventList.styled";
import { eventsList } from "../mockData";
import AvatarGroup from "../../../../components/avatar-group";
import More1 from "../../../../assets/More1";
import { useTheme } from "styled-components";
import moment from "moment";
import { useTranslate } from "../../../../locals/useTranslate";
import MoreBox from "./MoreBox";

type Props = {};

const EventList = (props: Props) => {
  const theme = useTheme();
  const { language } = useTranslate();

  const [events, setEvents] = useState(eventsList);
  const [activeScrollbar, setActiveScrollbar] = useState(false);
  const [activeMoreBoxIndex, setActiveMoreBoxIndex] = useState<null | number>(
    null
  );

  const activeMoreBoxHandler = (id: number) => {
    setActiveMoreBoxIndex(id);
  };

  const deactiveMoreBoxHandler = () => {
    setActiveMoreBoxIndex(null);
  };

  const activeScrollbarHandler = () => {
    setActiveScrollbar(true);
  };
  const deactiveScrollbarHandler = () => {
    setActiveScrollbar(false);
  };

  const getTimeHandlder = (date: string): string => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR", { timeStyle: "short" }).format(d);
  };

  const getDateHandlder = (date: string): string => {
    const d = new Date(date);
    return (
      new Intl.DateTimeFormat("fa-IR", { day: "numeric" }).format(d) +
      " " +
      Intl.DateTimeFormat("fa-IR", { month: "long" }).format(d)
    );
  };
  return (
    <List
      $activeScrollbar={activeScrollbar}
      onMouseEnter={activeScrollbarHandler}
      onMouseLeave={deactiveScrollbarHandler}
    >
      {events.map((item) => (
        <ListItem key={item.id}>
          <ListItemTimeAndDate>
            <Time>
              {language !== "fa"
                ? moment(item.start).format("LT")
                : getTimeHandlder(item.start)}
            </Time>
            <DateText>
              {language !== "fa"
                ? moment(item.start).format("MMM Do")
                : getDateHandlder(item.start)}
            </DateText>
          </ListItemTimeAndDate>
          <ListItemInfo>
            <ListItemInfoHeader>
              <ListItemInfoTitle>{item.title}</ListItemInfoTitle>
              <IconBox onClick={() => activeMoreBoxHandler(item.id)}>
                <More1 width="5px" color={theme.colors.surfaceText} />
              </IconBox>
            </ListItemInfoHeader>
            <ListItemInfoTime>
              {language !== "fa"
                ? moment(item.start).format("LT")
                : getTimeHandlder(item.start)}{" "}
              -{" "}
              {language !== "fa"
                ? moment(item.end).format("LT")
                : getTimeHandlder(item.end)}
            </ListItemInfoTime>
            <Members>
              <AvatarGroup limit={2} list={item.members} />
            </Members>
            {activeMoreBoxIndex === item.id && <MoreBox setActiveMoreBoxIndex={setActiveMoreBoxIndex}/>}
          </ListItemInfo>
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;
