import { ContainerBanner } from "./styles";

import imgBanner from "/assets/images/img-banner.png";

export function Banner() {
  return (
    <ContainerBanner>
      <img src={imgBanner} alt="" />
      <div>
        <h2>Sabores inigualáveis</h2>
        <small>Sinta o cuidado do preparo com ingredientes selecionados.</small>
      </div>
    </ContainerBanner>
  );
}
