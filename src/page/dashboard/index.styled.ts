import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Section1 = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  margin-bottom: 20px;
`;

export const SectionPart1 = styled.div`
  flex: 1;
  flex-shrink: 0;
`;

export const SectionPart2 = styled.div`
  flex: 0.8;
  flex-shrink: 0;
`;

export const InfoCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  row-gap: 20px;
  margin-top: 20px;
  flex-direction: column;
  @media (min-width: 1850px) {
    font-size: 25px;
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const InfoCardsItem = styled.div`
  width: 100%;
  @media (min-width: 1850px) {
    flex: 1;
  }
`;
