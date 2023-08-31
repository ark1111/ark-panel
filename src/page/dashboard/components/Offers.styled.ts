import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  cursor: pointer;
`;

export const HeaderButtonText = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const List = styled.div`
  width: 100%;
`;

export const ListItem = styled.div`
  width: 100%;
  border-radius: 7px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ListItemImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ListItemInfo = styled.div`
  flex: 1;
`;

export const ListItemTitle = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const ListItemSubitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceTextLight};
`;

export const ListItemPoint = styled.div<{ $color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: ${(props) => props.$color + "33"};
  color: ${(props) => props.$color};
  user-select: none;
`;
