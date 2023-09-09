import React from "react";
import { Box, BoxItem, Image, MoreBox } from "./index.styled";
import { useTranslate } from "../../locals/useTranslate";

type Props = {
  list: {
    id: number;
    avatar: string;
  }[];
  limit: number;
  avatarWidth?: string;
};

const AvatarGroup = ({ list, limit, avatarWidth }: Props) => {
  const { language } = useTranslate();
  return (
    <Box>
      {list.map((item, index) => (
        <React.Fragment key={item.id}>
          {index < limit && (
            <BoxItem
              $width={avatarWidth}
              $index={index}
              $isRtl={language === "fa"}
            >
              <Image src={item.avatar}></Image>
            </BoxItem>
          )}
        </React.Fragment>
      ))}
      {list.length > limit && (
        <MoreBox
          $width={avatarWidth}
          $amount={limit}
          $isRtl={language === "fa"}
          dir="ltr"
        >
          +{list.length - limit}
        </MoreBox>
      )}
    </Box>
  );
};

export default AvatarGroup;
