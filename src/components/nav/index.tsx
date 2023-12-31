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
  ProfileAvatarImage,
  ProfileButtonItem,
  ProfileButtons,
  ProfileSubText,
  ProfileText,
  ToggleIcon,
  TopPart,
} from "./index.styled";
import { MenuList } from "./list";
import ArrowDown1 from "../../assets/ArrowDown1";
import Setting1 from "../../assets/Setting1";
import Logout1 from "../../assets/Logout1";
import { useTheme } from "styled-components";
import { useTranslate } from "../../locals/useTranslate";
import { Link } from "react-router-dom";

type Props = {};

const Nav = (props: Props) => {
  const theme = useTheme();
  const { translate } = useTranslate();

  const [activeNav, setActiveNav] = useState(1);
  const [activeChildNav, setActiveChildNav] = useState<null | number>(null);
  const [activeToggleId, setActiveToggleId] = useState<null | number>(null);

  const changeNav = (id: number, index: number) => {
    if (MenuList[index].childs.length > 0) {
      if (id === activeToggleId) {
        setActiveToggleId(null);
      } else {
        setActiveToggleId(id);
      }
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
              <Link to={item.link}>
                <MenuItemMain
                  $isActive={item.id === activeNav}
                  onClick={() => changeNav(item.id, index)}
                >
                  <MenuItemMainLeft>
                    {/* <MenuItemMainIcon></MenuItemMainIcon> */}
                    {item.id === activeNav ? item.activeIcon : item.icon}
                    <MenuItemMainText $isActive={item.id === activeNav}>
                      {translate(item.title)}
                    </MenuItemMainText>
                  </MenuItemMainLeft>
                  {item.childs?.length > 0 && (
                    <ToggleIcon $isActive={item.id === activeToggleId}>
                      <ArrowDown1
                        width="12px"
                        color={
                          item.id === activeNav
                            ? "#fff"
                            : theme.colors.surfaceText
                        }
                      />
                    </ToggleIcon>
                  )}
                </MenuItemMain>
              </Link>
              {item.childs?.length > 0 && (
                <MenuItemChilds $isActive={item.id === activeToggleId}>
                  {item.childs.map((childItem) => (
                    <Link key={childItem.id} to={childItem.link}>
                      <MenuItemChildItem
                        key={childItem.id}
                        onClick={() => childchangeNav(item.id, childItem.id)}
                        $isActive={childItem.id === activeChildNav}
                      >
                        <ChildItemDot></ChildItemDot>
                        <ChildItemText>
                          {translate(childItem.title)}
                        </ChildItemText>
                      </MenuItemChildItem>
                    </Link>
                  ))}
                </MenuItemChilds>
              )}
            </MenuItem>
          ))}
        </Menu>
      </TopPart>
      <Profile>
        <ProfileAvatar>
          <ProfileAvatarImage src="/assets/images/mock/sample-avatar-1.png"></ProfileAvatarImage>
        </ProfileAvatar>
        <ProfileText>Alireza</ProfileText>
        <ProfileSubText>alireza.khaji11@gmail.com</ProfileSubText>
        <ProfileButtons>
          <ProfileButtonItem>
            <Setting1 color1="#BBBBBB" color2="#666666" />
          </ProfileButtonItem>
          <ProfileButtonItem>
            <Logout1 color1="#BBBBBB" color2="#666666" />
          </ProfileButtonItem>
        </ProfileButtons>
      </Profile>
    </Box>
  );
};

export default Nav;
