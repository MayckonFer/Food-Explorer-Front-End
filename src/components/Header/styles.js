import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${({ theme }) => theme.dark_700};
  padding-top: 5.6rem;
  padding-bottom: 2.4rem;

  > div {
    width: 100%;
    max-width: 110rem;
    padding: 0 2rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    padding: 2.8rem 0;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;

  img[alt="Logo admin"] {
    margin: 0 auto;
  }

  > img {
    width: 15rem;

    @media (min-width: 425px) {
      width: 20rem;
    }

    @media (min-width: 576px) {
      width: 30rem;
    }
  }

  > button {
    position: relative;
  }

  > button > span {
    background-color: ${({ theme }) => theme.red_300};
    border-radius: 999px;
    padding: 0.1rem 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.light_100};
    position: absolute;
    right: -1rem;
    top: -1rem;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;
  align-items: center;
  gap: 3.2rem;
  width: 100%;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 21.6rem;
    line-height: 0;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;
