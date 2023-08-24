/* eslint-disable react-hooks/exhaustive-deps */

import {
  ContainerMain,
  ContainerSnack,
  TitleHome,
  WrapperCards,
} from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/Index";
import { Banner } from "../../components/Banner/Index";
import { Card } from "../../components/Card/Index";

import { useAuth } from "../../Context/AuthContext";

export function Home() {
  const { dataDish } = useAuth();

  return (
    <>
      <Header />
      <ContainerMain>
        <Banner />
        <ContainerSnack>
          <TitleHome>Refeições</TitleHome>

          <WrapperCards>
            {dataDish
              ? dataDish.map((dish) =>
                  dish.category === "Refeição" ? (
                    <Card key={dish.id} dish={dish} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </WrapperCards>
        </ContainerSnack>

        <ContainerSnack>
          <TitleHome>Sobremesas</TitleHome>

          <WrapperCards>
            {dataDish
              ? dataDish.map((dish) =>
                  dish.category === "Sobremesas" ? (
                    <Card key={dish.id} dish={dish} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </WrapperCards>
        </ContainerSnack>

        <ContainerSnack>
          <TitleHome>Bebidas</TitleHome>

          <WrapperCards>
            {dataDish
              ? dataDish.map((dish) =>
                  dish.category === "Bebidas" ? (
                    <Card key={dish.id} dish={dish} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </WrapperCards>
        </ContainerSnack>
      </ContainerMain>
      <Footer />
    </>
  );
}
