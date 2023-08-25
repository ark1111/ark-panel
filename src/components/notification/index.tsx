import React, { useRef } from "react";
import { BackSurface, Box } from "./index.styled";

type Props = {
  hideNotificationHandler: Function;
};

const NotificationBox = ({ hideNotificationHandler }: Props) => {
  const boxRef = useRef<any>();
  const hideNotification = (e: React.MouseEvent) => {
    e.stopPropagation();
    boxRef.current.style.transform = "translateX(400px)";
    setTimeout(() => {
      hideNotificationHandler();
    }, 500);
  };

  const insideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <BackSurface onClick={(e) => hideNotification(e)}>
      <Box ref={boxRef} onClick={(e) => insideClick(e)}></Box>
    </BackSurface>
  );
};

export default NotificationBox;
