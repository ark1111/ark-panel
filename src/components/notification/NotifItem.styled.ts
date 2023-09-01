import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  column-gap: 20px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 1000px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  flex: 1;
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const Time = styled.div`
  width: 80px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceTextLight};
  text-align: end;
`;
