/* eslint-disable react/prop-types */
import { ContainerButton } from "./styles";

export function Button({ children, title, loading = false, ...rest }) {
  return (
    <ContainerButton type="buttom" disabled={loading} {...rest}>
      {children}
      {loading ? "Carregando..." : title}
    </ContainerButton>
  );
}
