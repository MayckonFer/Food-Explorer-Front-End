/* eslint-disable react-hooks/exhaustive-deps */

import {
  ContainerMain,
  ContainerSnack,
  TitleHome,
  ContainerCards,
  WrapperCards,
} from "./styles";

import imgDish from "/assets/images/prato-vazio.jpg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/Index";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";

import { useAuth } from "../../Context/AuthContext";

import { api } from "../../services/api";

export function Home() {
  const { dataDish } = useAuth();

  const selectDish = dataDish && dataDish.find((dish) => dish);

  const avatarDish =
    selectDish && selectDish.avatar
      ? `${api.defaults.baseURL}/files/${selectDish && selectDish.avatar}`
      : imgDish;

  return (
    <>
      <Header />
      <ContainerMain>
        <Banner />
        <ContainerSnack>
          <TitleHome>Refeições</TitleHome>

          <ContainerCards>
            <WrapperCards>
              {dataDish
                ? dataDish.map((dish) =>
                    dish.category === "Refeição" ? (
                      <Card
                        key={dish.id}
                        idDish={dish.id}
                        avatar={avatarDish}
                        title={dish.title}
                        description={dish.description}
                        price={dish.price}
                      />
                    ) : (
                      ""
                    )
                  )
                : ""}

              <Card
                idDish={Math.random()}
                avatar="/assets/images/img1.png"
                title="Torradas de Parma >"
                description="Presunto de parma e rúcula em um pão com fermentação natural."
                price="25,97"
              />
              <Card
                idDish={Math.random()}
                avatar="/assets/images/img2.png"
                title="Spaguetti Gambe  >"
                description="Massa fresca com camarões e pesto. "
                price="22,00"
              />
              <Card
                idDish={Math.random()}
                avatar="/assets/images/img3.png"
                title="Salada Ravanello >"
                description="Rabanete, folhas verdes e molho agridoce salpicados com gergelim"
                price="49,97"
              />
            </WrapperCards>
          </ContainerCards>
        </ContainerSnack>

        <ContainerSnack>
          <TitleHome>Sobremesas</TitleHome>

          <ContainerCards>
            <WrapperCards>
              {dataDish
                ? dataDish.map((dish) =>
                    dish.category === "Sobremesas" ? (
                      <Card
                        key={dish.id}
                        idDish={dish.id}
                        avatar={avatarDish}
                        title={dish.title}
                        description={dish.description}
                        price={dish.price}
                      />
                    ) : (
                      ""
                    )
                  )
                : ""}

              <Card
                idDish={Math.random()}
                avatar="/assets/images/img4.png"
                title="Peachy pastrie >"
                description="Delicioso folheado de pêssego com folhas de hortelã."
                price="32,97"
              />
              <Card
                idDish={Math.random()}
                avatar="/assets/images/img5.png"
                title="Macarons  >"
                description="Farinha de amêndoas, manteiga, claras e açúcar."
                price="79,97"
              />
              <Card
                idDish={Math.random()}
                avatar="/assets/images/img3.png"
                title="Salada Ravanello >"
                description="Rabanete, folhas verdes e molho agridoce salpicados com gergelim"
                price="49,97"
              />
            </WrapperCards>
          </ContainerCards>
        </ContainerSnack>

        <ContainerSnack>
          <TitleHome>Bebidas</TitleHome>

          <ContainerCards>
            <WrapperCards>
              {dataDish
                ? dataDish.map((dish) =>
                    dish.category === "Bebidas" ? (
                      <Card
                        key={dish.id}
                        idDish={dish.id}
                        avatar={avatarDish}
                        title={dish.title}
                        description={dish.description}
                        price={dish.price}
                      />
                    ) : (
                      ""
                    )
                  )
                : ""}

              <Card
                idDish={Math.random()}
                avatar="/assets/images/img1.png"
                title="Torradas de Parma >"
                description="Presunto de parma e rúcula em um pão com fermentação natural."
                price="25,97"
              />
              <Card
                idDish={Math.random()}
                avatar="/assets/images/img2.png"
                title="Spaguetti Gambe  >"
                description="Massa fresca com camarões e pesto. "
                price="22,00"
              />
              <Card
                idDish={Math.random()}
                avatar="/assets/images/img3.png"
                title="Salada Ravanello >"
                description="Rabanete, folhas verdes e molho agridoce salpicados com gergelim"
                price="49,97"
              />
            </WrapperCards>
          </ContainerCards>
        </ContainerSnack>
      </ContainerMain>
      <Footer />
    </>
  );
}
