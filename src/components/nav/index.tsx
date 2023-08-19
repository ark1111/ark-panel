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
  ToggleIcon,
  TopPart,
} from "./index.styled";
import { MenuList } from "./list";
import ArrowDown1 from "../../assets/ArrowDown1";
import Setting1 from "../../assets/Setting1";

type Props = {};

const Nav = (props: Props) => {
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
              <MenuItemMain
                $isActive={item.id === activeNav}
                onClick={() => changeNav(item.id, index)}
              >
                <MenuItemMainLeft>
                  {/* <MenuItemMainIcon></MenuItemMainIcon> */}
                  {item.id === activeNav ? item.activeIcon : item.icon}
                  <MenuItemMainText $isActive={item.id === activeNav}>
                    {item.title}
                  </MenuItemMainText>
                </MenuItemMainLeft>
                {item.childs?.length > 0 && (
                  <ToggleIcon $isActive={item.id === activeToggleId}>
                    <ArrowDown1
                      width="12px"
                      color={item.id === activeNav ? "#fff" : "#111"}
                    />
                  </ToggleIcon>
                )}
              </MenuItemMain>
              {item.childs?.length > 0 && (
                <MenuItemChilds $isActive={item.id === activeToggleId}>
                  {item.childs.map((childItem) => (
                    <MenuItemChildItem
                      key={childItem.id}
                      onClick={() => childchangeNav(item.id, childItem.id)}
                      $isActive={childItem.id === activeChildNav}
                    >
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
          <ProfileButtonItem>
            <Setting1/>
          </ProfileButtonItem>
          <ProfileButtonItem></ProfileButtonItem>
        </ProfileButtons>
      </Profile>
    </Box>
  );
};

export default Nav;
