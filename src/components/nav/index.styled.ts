import { styled } from "styled-components";

export const Box = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 20px;
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
  color: #111;
`;

export const Menu = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const MenuItem = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const MenuItemMain = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItemMainLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const MenuItemMainIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #333;
`;

export const MenuItemMainText = styled.div`
  font-size: 20px;
  color: #111;
`;
