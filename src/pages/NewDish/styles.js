import styled from "styled-components";

export const ContainerNewDish = styled.main`
  @media (min-width: 768px) {
    height: calc(100vh - 24rem);
  }
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;

  header {
    margin-top: 1rem;
  }

  header button {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.light_100};
    line-height: 140%;
  }
`;

export const ContentNewDish = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @media (min-width: 768px) {
      button {
        max-width: 17.2rem;
        margin-left: auto;
      }
    }
  }
`;

export const UploadImagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 22.9rem;
  }

  legend {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.light_400};
  }

  label {
    background-color: ${({ theme }) => theme.dark_900};
    border-radius: 8px;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 8px;
    padding: 1.2rem 3.2rem;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.light_100};
    cursor: pointer;
  }

  label input[type="file"] {
    display: none;
  }
`;

export const ContainerWrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;

    input[id="name_new_dish"] {
      max-width: 46.3rem;
    }
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  label {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.light_400};
  }

  select,
  select option,
  textarea {
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.dark_900};
    border: 0;
    color: ${({ theme }) => theme.light_100};

    margin-bottom: 0.8rem;
    border-radius: 1rem;

    width: 100%;

    padding: 1rem 1.6rem;
  }

  select {
    margin: 0;
  }

  textarea {
    height: 17.2rem;
    resize: none;
    margin: 0;
  }
`;

export const WrapperTags = styled.div`
  background-color: ${({ theme }) => theme.dark_800};
  border-radius: 8px;
  padding: 8px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`;

export const TagContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.light_600};
  border-radius: 8px;
  padding: 1rem 1.6rem;

  span {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.light_100};
    line-height: 100%;
  }

  button {
    line-height: 0;
  }
`;

export const AddTag = styled.div`
  background: none;
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.light_500};
  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 8px;

  input[type="text"] {
    background: none;
    border: 0;
    width: 7.5rem;
    color: ${({ theme }) => theme.light_100};
  }

  button {
    line-height: 0;
  }
`;
