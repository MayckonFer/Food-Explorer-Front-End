import styled from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  height: 12rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: ${({ theme }) => theme.gradient_200};
  margin-top: 4.4rem;

  position: relative;

  @media (min-width: 576px) {
    height: 16rem;
  }

  @media (min-width: 768px) {
    height: 19.9rem;
  }

  @media (min-width: 992px) {
    height: 26rem;
    margin-top: 15rem;
  }

  > img {
    position: absolute;
    top: -3rem;
    left: -4rem;

    width: 23rem;

    display: none;

    @media (min-width: 425px) {
      display: block;
    }

    @media (min-width: 576px) {
      width: 29.5rem;
    }

    @media (min-width: 768px) {
      width: 35.5rem;
    }

    @media (min-width: 992px) {
      width: 60.5rem;
      top: -13rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 36.5rem;
    padding: 1rem;

    @media (min-width: 992px) {
      width: 52.5rem;
    }

    > h2 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};

      @media (min-width: 576px) {
        font-size: 2.4rem;
      }

      @media (min-width: 768px) {
        font-size: 3.2rem;
      }

      @media (min-width: 992px) {
        font-size: 4rem;
      }
    }

    > small {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};

      @media (min-width: 576px) {
        font-size: 1.4rem;
      }

      @media (min-width: 768px) {
        font-size: 1.6rem;
      }
    }
  }
`;
