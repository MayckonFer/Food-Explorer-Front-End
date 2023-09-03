/* eslint-disable react/prop-types */
import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

import {
  ContainerCard,
  ContainerCardAdmin,
  TitleCard,
  DescriptionCard,
  PriceCard,
  AmountProduct,
  FooterCard,
} from "./styles";

import { Button } from "../Button";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useAdminContext } from "../../Context/IsAdmin";

export function Card({ idDish, avatar, title, description, price }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { isAdmin } = useAdminContext();

  const navigate = useNavigate();

  return (
    <>
      {isAdmin === true ? (
        <ContainerCardAdmin>
          <header>
            <button
              title="Editar prato"
              onClick={() => navigate(`/editar-prato/${idDish}`)}
            >
              <MdModeEditOutline size={24} color="#fff" />
            </button>
          </header>

          <img src={avatar} alt={title} />

          <h2>{title}</h2>

          {window.innerWidth >= 768 ? <span>{description}</span> : ""}

          <p>R$ {price}</p>
        </ContainerCardAdmin>
      ) : (
        <ContainerCard>
          {isFavorite === true ? (
            <button
              id="isFavorite"
              title="Favorito"
              onClick={() => setIsFavorite(false)}
            >
              <AiFillHeart size={24} color="#fff" />
            </button>
          ) : (
            <button
              id="isFavorite"
              title="Favoritar"
              onClick={() => setIsFavorite(true)}
            >
              <AiOutlineHeart size={24} color="#fff" />
            </button>
          )}

          <img src={avatar} alt={title} />

          <TitleCard>{title}</TitleCard>

          <DescriptionCard>{description}</DescriptionCard>

          <PriceCard>R$ {price}</PriceCard>

          <FooterCard>
            <AmountProduct>
              <button>
                <RiSubtractFill size={24} color="#fff" />
              </button>
              <span>01</span>
              <button>
                <AiOutlinePlus size={24} color="#fff" />
              </button>
            </AmountProduct>

            <Button
              title="incluir"
              onClick={() => navigate(`/prato/${idDish}`)}
            />
          </FooterCard>
        </ContainerCard>
      )}
    </>
  );
}
