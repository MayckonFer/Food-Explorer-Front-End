import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.dark_900};
  color: ${({ theme }) => theme.light_100};

  border-radius: 1rem;

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.6rem;

    color: ${({ theme }) => theme.light_100};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.light_500};
    }
  }

  > svg {
    margin-left: 1.6rem;
    width: 3.2rem;
    height: 3.2rem;

    > path {
      fill: ${({ theme }) => theme.light_400};
    }
  }
`;
