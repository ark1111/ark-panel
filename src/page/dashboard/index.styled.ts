import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Section1 = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  margin-bottom: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
`;

export const SectionPart1 = styled.div`
  width: 100%;
  flex-shrink: 0 !important;
  @media (min-width: 1400px) {
    width: 55%;
  }
`;

export const SectionPart2 = styled.div`
  width: 100%;
  flex-shrink: 0 !important;
  @media (min-width: 1400px) {
    width: calc(45% - 20px);
  }
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
