import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 21rem;
  min-width: 21rem;
  height: 29.2rem;
  position: relative;

  background-color: ${({ theme }) => theme.dark_200};
  border: 1px solid ${({ theme }) => theme.dark_300};
  border-radius: 8px;
  padding: 2.4rem;
  overflow: auto;

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
    width: 30.4rem;
    min-width: 30.4rem;
    height: 46.2rem;
  }

  > button[id="isFavorite"] {
    position: absolute;
    top: 1rem;
    right: 1rem;
    line-height: 0;
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
    margin: 0 auto;
    display: block;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 17.6rem;
      height: 17.6rem;
    }
  }
`;

export const TitleCard = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.light_300};
  text-align: center;
  margin-top: 1.2rem;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const DescriptionCard = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.light_400};
  text-align: center;
  line-height: 160%;
  margin-top: 1.6rem;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const PriceCard = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.cyan_light};
  text-align: center;
  margin-top: 1.2rem;
  line-height: 100%;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 160%;
  }
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    height: 3.2rem;
    margin-top: 1.2rem;

    @media (min-width: 768px) {
      margin: 0;
      width: 9.2rem;
      height: 4.8rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.6rem;
    margin-top: 1.6rem;
  }
`;

export const AmountProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  margin-top: 1.2rem;

  > button {
    line-height: 0;
  }

  > span {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.light_300};
    line-height: 100%;

    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 160%;
    }
  }
`;

export const ContainerCardAdmin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  position: relative;

  background-color: ${({ theme }) => theme.dark_400};
  border: 1px solid ${({ theme }) => theme.dark_700};
  border-radius: 8px;

  padding: 2rem;

  width: 21rem;
  min-width: 21rem;
  height: 29.2rem;

  @media (min-width: 768px) {
    width: 30.4rem;
    min-width: 30.4rem;
    height: 46.2rem;
    gap: 3.2rem;
  }

  header {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    > button {
      outline: 0;
    }
  }

  img {
    margin: 2rem auto 0;
    display: block;
    width: 8.8rem;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 17.6rem;
    }
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.light_100};
    text-align: center;

    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.light_400};
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.cyan_light};
    text-align: center;

    @media (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
`;
