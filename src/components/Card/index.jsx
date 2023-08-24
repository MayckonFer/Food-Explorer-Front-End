/* eslint-disable react/prop-types */
import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

import imgCard from "/assets/images/img-card-1.png";

import {
  ContainerCard,
  ContainerCardAdmin,
  TitleCard,
  DescriptionCard,
  PriceCard,
  AmountProduct,
  FooterCard,
} from "./styles";

import imgDish from "/assets/images/prato-vazio.jpg";

import { Button } from "../Button";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAdminContext } from "../../Context/IsAdmin";

export function Card({ dish }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { isAdmin } = useAdminContext();

  const navigate = useNavigate();

  const avatar = dish
    ? `${api.defaults.baseURL}/files/${dish.avatar}`
    : imgDish;

  return (
    <>
      {isAdmin === true ? (
        <ContainerCardAdmin>
          <header>
            <button
              title="Editar prato"
              onClick={() => navigate(`/editar-prato/${dish && dish.id}`)}
            >
              <MdModeEditOutline size={24} color="#fff" />
            </button>
          </header>

          <img src={dish && avatar} alt={dish && dish.title} />

          <h2>{dish.title}</h2>

          {window.innerWidth >= 768 ? (
            <span>{dish && dish.description}</span>
          ) : (
            ""
          )}

          <p>R$ {dish && dish.price}</p>
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

          <img
            src={avatar !== null ? avatar : imgCard}
            alt={dish && dish.title}
          />

          <TitleCard>{dish && dish.title}</TitleCard>

          <DescriptionCard>{dish && dish.description}</DescriptionCard>

          <PriceCard>R$ {dish && dish.price}</PriceCard>

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
              onClick={() => navigate(`/prato/${dish && dish.id}`)}
            />
          </FooterCard>
        </ContainerCard>
      )}
    </>
  );
}
