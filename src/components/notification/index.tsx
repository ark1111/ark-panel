import React from "react";
import { BackSurface, Box } from "./index.styled";

type Props = {
  hideNotificationHandler: Function;
};

const NotificationBox = ({ hideNotificationHandler }: Props) => {
  const hideNotification = (e: React.MouseEvent) => {
    e.stopPropagation();
    hideNotificationHandler();
  };

  const insideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <BackSurface onClick={(e) => hideNotification(e)}>
      <Box onClick={(e) => insideClick(e)}></Box>
    </BackSurface>
  );
};

export default NotificationBox;
