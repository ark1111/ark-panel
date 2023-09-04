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

type Props = {};

const EventList = (props: Props) => {
  const theme = useTheme();
  const [events, setEvents] = useState(eventsList);
  const [activeScrollbar, setActiveScrollbar] = useState(false);

  const activeScrollbarHandler = () => {
    setActiveScrollbar(true);
  };
  const deactiveScrollbarHandler = () => {
    setActiveScrollbar(false);
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
            <Time>{item.start} pm</Time>
            <DateText>{item.date}</DateText>
          </ListItemTimeAndDate>
          <ListItemInfo>
            <ListItemInfoHeader>
              <ListItemInfoTitle>{item.title}</ListItemInfoTitle>
              <IconBox>
                <More1 width="5px" color={theme.colors.surfaceText} />
              </IconBox>
            </ListItemInfoHeader>
            <ListItemInfoTime>
              {item.start} pm - {item.end} pm
            </ListItemInfoTime>
            <Members>
              <AvatarGroup limit={2} list={item.members} />
            </Members>
          </ListItemInfo>
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;
