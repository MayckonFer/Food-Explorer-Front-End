import {
  ContainerDish,
  Spacing,
  BackContainer,
  ContentDish,
  WrapperInfoDish,
  WrapperTags,
  FooterDish,
} from "./styles";

import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import ImgDish from "/assets/images/img1.png";

import { useAuth } from "../../Context/AuthContext";

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAdminContext } from "../../Context/IsAdmin";

export function Dish() {
  const { isAdmin } = useAdminContext();
  const { dataDish } = useAuth();

  const { innerWidth: width } = window;

  const navigate = useNavigate();

  const { id } = useParams();

  const selectedDish =
    dataDish && dataDish.find((dish) => dish.id === Number(id));

  const avatarDish =
    dataDish && dataDish
      ? `${api.defaults.baseURL}/files/${selectedDish.avatar}`
      : ImgDish;

  return (
    <>
      <Header />
      {isAdmin === true ? (
        <ContainerDish>
          {dataDish && (
            <Spacing>
              <BackContainer>
                <button title="Voltar" onClick={() => navigate("/home")}>
                  <MdArrowBackIosNew size={32} color="#fff" />
                  Voltar
                </button>
              </BackContainer>

              <ContentDish>
                <img
                  src={avatarDish}
                  alt={selectedDish && selectedDish.title}
                />

                <WrapperInfoDish>
                  <h2>{selectedDish.title}</h2>

                  <p>{selectedDish.description}</p>

                  <WrapperTags>
                    {selectedDish.tags.map((tag) => (
                      <span key={String(tag.id)}>{tag.name}</span>
                    ))}
                  </WrapperTags>

                  <FooterDish>
                    <Button title="Editar prato" />
                  </FooterDish>
                </WrapperInfoDish>
              </ContentDish>
            </Spacing>
          )}
        </ContainerDish>
      ) : (
        <ContainerDish>
          {dataDish && (
            <Spacing>
              <BackContainer>
                <button title="Voltar" onClick={() => navigate("/home")}>
                  <MdArrowBackIosNew size={32} color="#fff" />
                  Voltar
                </button>
              </BackContainer>

              <ContentDish>
                <img
                  src={avatarDish}
                  alt={selectedDish && selectedDish.title}
                />

                <WrapperInfoDish>
                  <h2>{selectedDish.title}</h2>

                  <p>{selectedDish.description}</p>

                  <WrapperTags>
                    {selectedDish.tags.map((tag) => (
                      <span key={String(tag.id)}>{tag.name}</span>
                    ))}
                  </WrapperTags>
                  <FooterDish>
                    <div>
                      <button>
                        <BsDash size={24} color="#fff" />
                      </button>
                      <span>01</span>
                      <button>
                        <AiOutlinePlus size={24} color="#fff" />
                      </button>
                    </div>

                    <Button title="incluir ∙ R$ 25,00">
                      {width < 992 ? (
                        <FaRegListAlt size={21} color="#fff" />
                      ) : (
                        ""
                      )}
                    </Button>
                  </FooterDish>
                </WrapperInfoDish>
              </ContentDish>
            </Spacing>
          )}
        </ContainerDish>
      )}

      <Footer />
    </>
  );
}
