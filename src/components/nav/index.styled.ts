import { styled } from "styled-components";

export const Box = styled.div`
  width: 400px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const TopPart = styled.div`
  width: 100%;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const Menu = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const MenuItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const MenuItemMain = styled.div<{ $isActive: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const MenuItemMainLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const ToggleIcon = styled.div<{ $isActive: boolean }>`
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all 1s;
`;

export const MenuItemMainIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #333;
`;

export const MenuItemMainText = styled.div<{ $isActive: boolean }>`
  font-size: 20px;
  color: ${(props) =>
    props.$isActive ? "#ffffff" : props.theme.colors.surfaceText};
`;

export const MenuItemChilds = styled.div<{ $isActive: boolean }>`
  width: 100%;
  padding-inline: 50px;
  max-height: ${(props) => (props.$isActive ? "1000px" : "0px")};
  overflow: hidden;
  transition: all 1s;
`;

export const MenuItemChildItem = styled.div<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px 0;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? "100%" : "60%")};
`;

export const ChildItemDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ChildItemText = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
`;

export const ProfileAvatar = styled.div`
  width: 25%;
  aspect-ratio: 1/1;
  border-radius: 1000px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ProfileText = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.colors.surfaceText};
  font-weight: bold;
`;

export const ProfileSubText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.surfaceText};
  opacity: 70%;
`;

export const ProfileButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  margin-top: 10px;
`;

export const ProfileButtonItem = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  cursor: pointer;
`;
