import styled from "styled-components";

export const ContainerMenuHeader = styled.nav`
  position: absolute;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.dark_400};

  > div:nth-child(2) {
    width: 100%;
    max-width: 110rem;
    padding: 0 2rem;
    margin: 0 auto;
  }
`;

export const HeaderMenu = styled.div`
  background-color: ${({ theme }) => theme.dark_700};
  padding: 5.6rem 0 2.4rem;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 1.6rem;
    padding: 0 2rem;

    > h2 {
      font-size: 2.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};
    }
  }
`;

export const ContentMenu = styled.div`
  margin-top: 3.6rem;

  button[title="Novo prato"] {
    border-top: 0;
  }

  button[title="Sair"] {
    border-top: 0;
    margin-top: 0.5rem;
  }

  button {
    width: 100%;
    margin-top: 3.6rem;
    border-top: 1px solid ${({ theme }) => theme.dark_1000};
    border-bottom: 1px solid ${({ theme }) => theme.dark_1000};
    text-align: left;
    line-height: 2;

    span {
      font-size: 2.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};
      display: block;
    }
  }
`;
