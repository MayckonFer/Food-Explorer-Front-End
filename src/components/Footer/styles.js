import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: ${({ theme }) => theme.dark_600};
  margin-top: 4.6rem;
  padding: 1.6rem 0;

  @media (min-width: 768px) {
    padding: 2.4rem 0;
  }

  > div {
    width: 100%;
    max-width: 110rem;
    padding: 0 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (min-width: 430px) {
      flex-direction: row;
      gap: 0;
    }

    > img {
      width: 14.2rem;

      @media (min-width: 768px) {
        width: 18.6rem;
      }
    }

    > p {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
`;
