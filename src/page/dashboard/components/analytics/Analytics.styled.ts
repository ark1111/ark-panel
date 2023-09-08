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

export const BoxItem = styled.div<{
  $move: number;
  $isRtl: boolean;
  $isActive: boolean;
}>`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  transition: all 1s, opacity 2s;
  flex-shrink: 0;
  transform: ${(props) =>
    `translateX(${(props.$isRtl ? 1 : -1) * props.$move * 100}%)`};
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
`;

export const BoxItemDetails = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 2200px) {
    width: 65%;
  }
  @media (min-width: 2300px) {
    width: 60%;
  }
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
  width: calc(30% - 20px);
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 2200px) {
    width: calc(35% - 20px);
  }
  @media (min-width: 2300px) {
    width: calc(40% - 20px);
  }
`;

export const Image = styled.img`
  flex-shrink: 0;
  height: 70%;
  @media (min-width: 2300px) {
    height: 80%;
  }
`;

export const Dots = styled.div<{ $isRtl: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 10px;
  position: absolute;
  top: 30px;
  right: ${(props) => (props.$isRtl ? "initial" : "30px")};
  left: ${(props) => (props.$isRtl ? "30px" : "initial")};
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
