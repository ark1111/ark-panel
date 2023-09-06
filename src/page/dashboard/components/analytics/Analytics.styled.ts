import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  aspect-ratio: 1/0.5;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

// export const Slider = styled.div`
//   height: 100%;
// `;

export const BoxItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const BoxItemDetails = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const BoxItemImage = styled.div`
  flex: 0.7;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
