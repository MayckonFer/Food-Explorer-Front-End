import styled from "styled-components";

export const ContainerIsAdmin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.light_100};
  text-align: center;
  margin-bottom: 4rem;
`;

export const WrapperHomes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h2 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};
    }

    button img {
      width: 20rem;
    }
  }
`;

export const WrapperHandleLogout = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`;
