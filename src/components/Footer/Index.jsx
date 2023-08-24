import { ContainerFooter } from "./styles";

import imgFooter from "/assets/images/img-footer.png";

export function Footer() {
  return (
    <ContainerFooter>
      <div>
        <img src={imgFooter} alt="" />

        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </ContainerFooter>
  );
}
