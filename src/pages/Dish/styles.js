import styled from "styled-components";

export const ContainerDish = styled.main`
  @media (min-width: 768px) {
    height: calc(100vh - 23.3rem);
  }
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const BackContainer = styled.div`
  width: 100%;

  > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.light_100};
    margin-top: 2.4rem;

    @media (min-width: 992px) {
      font-weight: 700;
    }
  }
`;

export const ContentDish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.6rem;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 4.8rem;
    margin-top: 4.2rem;
  }

  > img {
    width: 26.4rem;
    margin: 0 auto;
    display: block;
    border-radius: 50%;

    @media (min-width: 992px) {
      width: 38.9rem;
    }
  }
`;

export const WrapperInfoDish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 1.6rem;

  @media (min-width: 992px) {
    align-items: flex-start;
    width: 55.9rem;
  }

  > h2 {
    font-size: 2.7rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.light_300};

    @media (min-width: 992px) {
      font-size: 4rem;
    }
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
    color: ${({ theme }) => theme.light_300};
    text-align: center;

    @media (min-width: 992px) {
      font-size: 2.4rem;
      text-align: left;
    }
  }
`;

export const WrapperTags = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  > span {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.light_100};

    background-color: ${({ theme }) => theme.dark_1000};
    border-radius: 8px;
    padding: 0.5rem 1rem;
  }
`;

export const FooterDish = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-top: 4.8rem;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 1.6rem;

    > span {
      font-size: 2.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.light_300};
      line-height: 160%;
    }
  }

  > button {
    width: 18.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: 1.4rem;
  }
`;
