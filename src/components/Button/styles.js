import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.red_400};
  color: ${({ theme }) => theme.light_100};

  height: 5.6rem;
  border-radius: 1rem;
  font-weight: 500;
  transition: 100ms;

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
