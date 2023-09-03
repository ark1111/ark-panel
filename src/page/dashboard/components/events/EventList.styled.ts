import { styled } from "styled-components";

export const List = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 10px;
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
