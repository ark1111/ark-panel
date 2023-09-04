import { styled } from "styled-components";

export const List = styled.div<{ $activeScrollbar: boolean }>`
  width: 100%;
  max-height: 300px;
  overflow-y: ${(props) => (props.$activeScrollbar ? "auto" : "hidden")};
  margin-top: 10px;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ListItemTimeAndDate = styled.div`
  width: 90px;
  padding-top: 15px;
`;
export const Time = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const DateText = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceTextLight};
`;

export const ListItemInfo = styled.div`
  width: calc(100% - 105px);
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ListItemInfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ListItemInfoTitle = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const ListItemInfoTime = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceTextLight};
`;

export const Members = styled.div`
  width: 100%;
  margin-top: 20px;
`;
