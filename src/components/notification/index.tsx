import React, { useRef } from "react";
import {
  BackSurface,
  Box,
  CloseButton,
  Header,
  List,
  ListItem,
  Title,
} from "./index.styled";
import { notifList } from "./data";
import NotifItem from "./NotifItem";
import { useTranslate } from "../../locals/useTranslate";
import Close1 from "../../assets/Close1";
import { useTheme } from "styled-components";

type Props = {
  hideNotificationHandler: Function;
};

const NotificationBox = ({ hideNotificationHandler }: Props) => {
  const { translate, language } = useTranslate();
  const theme = useTheme();

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
          <CloseButton onClick={(e) => hideNotification(e)}>
            <Close1
              width="25px"
              color1={theme.colors.iconColor1}
              color2={theme.colors.iconColor2}
            />
          </CloseButton>
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
