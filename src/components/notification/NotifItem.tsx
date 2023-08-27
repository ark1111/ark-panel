import { Box,Avatar, Content, Time } from "./NotifItem.styled";

type Props = {};

const NotifItem = (props: Props) => {
  return (
    <Box>
      <Avatar></Avatar>
      <Content>Some text</Content>
      <Time>Now</Time>
    </Box>
  );
};

export default NotifItem;
