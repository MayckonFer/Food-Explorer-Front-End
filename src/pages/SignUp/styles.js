import styled from "styled-components";

export const ContainerSignUp = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.3rem;
  padding-top: 15.3rem;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  max-width: 31.6rem;
  margin: 0 auto;

  > legend {
    font-size: 3.2rem;
    line-height: 140%;
    font-weight: 500;
    display: none;

    @media (min-width: 992px) {
      display: block;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
  }

  @media (min-width: 992px) {
    margin: 0;
    background-color: ${({ theme }) => theme.dark_700};
    border-radius: 16px;
    padding: 6.4rem;
    max-width: 47.6rem;
  }
`;
