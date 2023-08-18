import { useState } from "react";
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
  const [activeNav, setActiveNav] = useState(1);
  const [activeChildNav, setActiveChildNav] = useState<null | number>(null);

  const changeNav = (id: number, index: number) => {
    if (MenuList[index].childs.length > 0) {
    } else {
      setActiveNav(id);
      setActiveChildNav(null);
    }
  };

  const childchangeNav = (pid: number, id: number) => {
    setActiveNav(pid);
    setActiveChildNav(id);
  };
  return (
    <Box>
      <TopPart>
        <Logo>
          <LogoText>ARK</LogoText>
        </Logo>
        <Menu>
          {MenuList.map((item, index) => (
            <MenuItem key={item.id}>
              <MenuItemMain
                $isActive={item.id === activeNav}
                onClick={() => changeNav(item.id, index)}
              >
                <MenuItemMainLeft>
                  <MenuItemMainIcon></MenuItemMainIcon>
                  <MenuItemMainText $isActive={item.id === activeNav}>
                    {item.title}
                  </MenuItemMainText>
                </MenuItemMainLeft>
              </MenuItemMain>
              {item.childs?.length > 0 && (
                <MenuItemChilds>
                  {item.childs.map((childItem) => (
                    <MenuItemChildItem
                      key={childItem.id}
                      onClick={() => childchangeNav(item.id,childItem.id)}
                      $isActive={childItem.id === activeChildNav}
                    >
                      <ChildItemDot ></ChildItemDot>
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
