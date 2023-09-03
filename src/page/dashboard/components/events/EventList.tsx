import React, { useState } from "react";
import {
  DateText,
  List,
  ListItem,
  ListItemInfo,
  ListItemInfoHeader,
  ListItemInfoTime,
  ListItemInfoTitle,
  ListItemTimeAndDate,
  Time,
} from "./EventList.styled";
import { eventsList } from "../mockData";

type Props = {};

const EventList = (props: Props) => {
  const [events, setEvents] = useState(eventsList);
  return (
    <List>
      {events.map((item) => (
        <ListItem key={item.id}>
          <ListItemTimeAndDate>
            <Time>{item.start} pm</Time>
            <DateText>{item.date}</DateText>
          </ListItemTimeAndDate>
          <ListItemInfo>
            <ListItemInfoHeader>
              <ListItemInfoTitle>{item.title}</ListItemInfoTitle>
            </ListItemInfoHeader>
            <ListItemInfoTime>
              {item.start} pm - {item.end} pm
            </ListItemInfoTime>
          </ListItemInfo>
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;
