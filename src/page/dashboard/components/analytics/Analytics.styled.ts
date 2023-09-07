import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  aspect-ratio: 1/0.4;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
`;

// export const Slider = styled.div`
//   height: 100%;
// `;

export const BoxItem = styled.div<{ $move: number }>`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  transition: all 1s;
  flex-shrink: 0;
  transform: ${(props) => `translateX(${-props.$move * 100}%)`};
`;

export const BoxItemDetails = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const Subtitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceTextLight};
`;

export const Items = styled.div`
  width: 100%;
`;
export const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 20px;
`;

export const ItemBox = styled.div`
  width: calc(50% - 10px);
  display: flex;
  align-items: center;
  column-gap: 10px;
  flex-shrink: 0;
`;

export const ItemBoxValue = styled.div`
  font-size: 18px;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const ItemBoxTitle = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const ItemsTitle = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const BoxItemImage = styled.div`
  flex: 0.7;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 2;
`;

export const DotsItem = styled.div<{ $isActive: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.$isActive
      ? props.theme.colors.surfaceText
      : props.theme.colors.background};
  cursor: pointer;
`;
