import {
  Box,
  Logo,
  LogoText,
  Menu,
  MenuItem,
  MenuItemMain,
  MenuItemMainIcon,
  MenuItemMainLeft,
  MenuItemMainText,
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
            <MenuItem>
              <MenuItemMain>
                <MenuItemMainLeft>
                  <MenuItemMainIcon></MenuItemMainIcon>
                  <MenuItemMainText>{item.title}</MenuItemMainText>
                </MenuItemMainLeft>
              </MenuItemMain>
            </MenuItem>
          ))}
        </Menu>
      </TopPart>
    </Box>
  );
};

export default Nav;
