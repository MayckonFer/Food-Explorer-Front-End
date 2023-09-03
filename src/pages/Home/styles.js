import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const ContainerSnack = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 5rem;
`;

export const TitleHome = styled.h2`
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 140%;
  color: ${({ theme }) => theme.light_100};
`;

export const ContainerCards = styled.div`
  width: 100%;
`;

export const WrapperCards = styled.div`
  max-width: 106rem;
  overflow: auto;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-top: 2.4rem;

  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.cyan_dark};
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    gap: 2.4rem;
  }
`;
