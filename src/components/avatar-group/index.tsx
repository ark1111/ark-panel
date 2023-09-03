import React from "react";
import { Box, BoxItem, Image, MoreBox } from "./index.styled";

type Props = {
  list: {
    id: number;
    avatar: string;
  }[];
  limit: number;
  avatarWidth?: string;
};

const AvatarGroup = ({ list, limit, avatarWidth }: Props) => {
  return (
    <Box>
      {list.map((item, index) => (
        <>
          {index < limit && (
            <BoxItem $width={avatarWidth} $index={index}>
              <Image src={item.avatar}></Image>
            </BoxItem>
          )}
        </>
      ))}
      {list.length > limit && (
        <MoreBox $width={avatarWidth} $amount={limit}>
          +{list.length - limit}
        </MoreBox>
      )}
    </Box>
  );
};

export default AvatarGroup;
