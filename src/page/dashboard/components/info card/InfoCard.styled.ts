import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const Contents = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
`;

export const Details = styled.div`
  flex: 1;
`;

export const DetailsMainText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const SpanUnit = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme.colors.surfaceTextLight};
`;

export const DetailsSubTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 10px;
`;

export const IconContainer = styled.div<{$isRotate:boolean}>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  transform: ${(props)=> props.$isRotate ? "rotateX(-180deg)" : "rotateX(0deg)"};
`;

export const DetailsSubText = styled.div`
  flex: 1;
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceTextLight};
`;

export const Span = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
`;

export const ChartContainer = styled.div`
  flex: 0.5;
  height: 100px;
`;
