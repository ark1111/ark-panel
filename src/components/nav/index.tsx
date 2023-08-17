import {
  Box,
  ChildItemDot,
  ChildItemText,
  Logo,
  LogoText,
  Menu,
  MenuItem,
  MenuItemChildItem,
  MenuItemChilds,
  MenuItemMain,
  MenuItemMainIcon,
  MenuItemMainLeft,
  MenuItemMainText,
  Profile,
  ProfileAvatar,
  ProfileButtonItem,
  ProfileButtons,
  ProfileSubText,
  ProfileText,
  TopPart,
} from "./index.styled";
import { MenuList } from "./list";

type Props = {};

const Nav = (props: Props) => {
  return (
    <Box>
      <TopPart>
        <Logo>
          <LogoText>ARK</LogoText>
        </Logo>
        <Menu>
          {MenuList.map((item) => (
            <MenuItem key={item.id}>
              <MenuItemMain>
                <MenuItemMainLeft>
                  <MenuItemMainIcon></MenuItemMainIcon>
                  <MenuItemMainText>{item.title}</MenuItemMainText>
                </MenuItemMainLeft>
              </MenuItemMain>
              {item.childs?.length > 0 && (
                <MenuItemChilds>
                  {item.childs.map((childItem) => (
                    <MenuItemChildItem key={childItem.id}>
                      <ChildItemDot></ChildItemDot>
                      <ChildItemText>{childItem.title}</ChildItemText>
                    </MenuItemChildItem>
                  ))}
                </MenuItemChilds>
              )}
            </MenuItem>
          ))}
        </Menu>
      </TopPart>
      <Profile>
        <ProfileAvatar></ProfileAvatar>
        <ProfileText>Alireza</ProfileText>
        <ProfileSubText>alireza.khaji11@gmail.com</ProfileSubText>
        <ProfileButtons>
          <ProfileButtonItem></ProfileButtonItem>
          <ProfileButtonItem></ProfileButtonItem>
        </ProfileButtons>
      </Profile>
    </Box>
  );
};

export default Nav;
