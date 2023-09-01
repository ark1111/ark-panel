import { Box, Avatar, Content, Time, AvatarImage } from "./NotifItem.styled";

type Props = {
  info: {
    id: number;
    avatar: string;
    createdAt: string;
    description: string;
  };
};

const NotifItem = ({ info }: Props) => {
  return (
    <Box>
      <Avatar>
        <AvatarImage src={info.avatar}></AvatarImage>
      </Avatar>
      <Content>{info.description}</Content>
      <Time>{info.createdAt}</Time>
    </Box>
  );
};

export default NotifItem;
