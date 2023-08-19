import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBoxContainer = styled.div`
  width: 400px;
  height: 50px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Notification = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeMode = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Language = styled.div`
  height: 50px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #555;
  cursor: pointer;
`;

export const LanguageText = styled.div`
  font-size: 16px;
  color: #111;
`;
