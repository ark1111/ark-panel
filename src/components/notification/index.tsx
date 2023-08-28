import React, { useRef } from "react";
import {
  BackSurface,
  Box,
  Header,
  List,
  ListItem,
  Title,
} from "./index.styled";
import { notifList } from "./data";
import NotifItem from "./NotifItem";
import { useTranslate } from "../../locals/useTranslate";

type Props = {
  hideNotificationHandler: Function;
};

const NotificationBox = ({ hideNotificationHandler }: Props) => {
  const { translate, language } = useTranslate();

  const boxRef = useRef<any>();
  const hideNotification = (e: React.MouseEvent) => {
    e.stopPropagation();
    let translateValue =
      language === "fa" ? "translateX(-400px)" : "translateX(400px)";
    boxRef.current.style.transform = translateValue;
    setTimeout(() => {
      hideNotificationHandler();
    }, 500);
  };

  const insideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <BackSurface onClick={(e) => hideNotification(e)}>
      <Box
        ref={boxRef}
        onClick={(e) => insideClick(e)}
        $isRtl={language === "fa"}
      >
        <Header>
          <Title>{translate("Notification")}</Title>
        </Header>
        <List>
          {notifList.map((item, index) => (
            <ListItem key={item.id}>
              <NotifItem info={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </BackSurface>
  );
};

export default NotificationBox;
