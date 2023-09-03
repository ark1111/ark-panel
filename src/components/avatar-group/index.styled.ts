import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
`;

export const BoxItem = styled.div<{ $width?: string; $index: number }>`
  width: ${(props) => props.$width || "40px"};
  aspect-ratio: 1/1;
  border-radius: 100px;
  overflow: hidden;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.background};
  transform: ${(props) => `translateX(-${props.$index * 10}px)`};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MoreBox = styled.div<{ $width?: string; $amount: number }>`
  width: ${(props) => props.$width || "40px"};
  aspect-ratio: 1/1;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.background};
  transform: ${(props) => `translateX(-${props.$amount * 10}px)`};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
  direction: "ltr";
`;
