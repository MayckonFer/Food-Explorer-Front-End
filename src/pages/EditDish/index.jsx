import {
  ContainerNewDish,
  Spacing,
  ContentNewDish,
  WrapperInputs,
  ContainerWrapperInputs,
  UploadImagem,
  WrapperTags,
  TagContent,
  AddTag,
  WrapperButtons,
} from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/Index";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { api } from "../../services/api";

export function EditDish() {
  const { dataDish } = useAuth();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState("");

  const navigate = useNavigate();

  const params = useParams();

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePrevire = URL.createObjectURL(file);
    setAvatar(imagePrevire);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTags]);
    setNewTags("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleDeleteDish() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      await api.delete(`/dishes/${params.id}`);

      setTimeout(() => {
        navigate("/home");
        window.location.reload();
      }, 500);
    }
  }

  async function handleAddNewDish() {
    if (!avatarFile || !avatar) return alert("Selecione uma imagem!");
    if (!title) return alert("Nome do prato não pode está vázios!");
    if (tags.length === 0) return alert("Adicione um ingrediente!");
    if (!price) return alert("Preço do prato não pode está vázios!");
    if (!description) return alert("Descrição do prato não pode está vázios!");

    if (avatarFile) {
      const fileUpdatedForm = new FormData();
      fileUpdatedForm.append("avatar", avatarFile);

      const response = await api.patch("/dishes/avatar", fileUpdatedForm);

      dataDish.avatar = response.data.avatar;
    }

    await api
      .put(`/dishes/${params.id}`, {
        title,
        description,
        price,
        category,
        avatar: dataDish.avatar,
        tags,
      })

      .then(() => {
        alert("Prato atualizado com sucesso!");
      })

      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          return alert("Não foi possível editar o prato!");
        }
      });

    setTimeout(() => {
      navigate("/home");
    }, 200);
  }

  return (
    <>
      <Header />
      <ContainerNewDish>
        <Spacing>
          <header>
            <button title="Voltar" onClick={() => navigate("/home")}>
              <IoIosArrowBack size={24} color="#fff" />
              Voltar
            </button>
          </header>

          <ContentNewDish>
            <Title>Editar prato</Title>

            <form>
              <ContainerWrapperInputs>
                <UploadImagem>
                  <legend>Imagem do prato</legend>

                  <label htmlFor="upload_image">
                    <BsUpload size={24} color="#fff" />
                    Selecione imagem
                    <input
                      type="file"
                      id="upload_image"
                      onChange={handleChangeAvatar}
                    />
                  </label>
                </UploadImagem>

                <WrapperInputs>
                  <label htmlFor="name_new_dish">Nome</label>

                  <Input
                    type="text"
                    placeholder="Ex: Salada Ceasar"
                    id="name_new_dish"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </WrapperInputs>

                <WrapperInputs>
                  <label htmlFor="category">Categoria</label>

                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Refeição</option>
                    <option>Pratos principais</option>
                    <option>Bebidas</option>
                  </select>
                </WrapperInputs>
              </ContainerWrapperInputs>
              <ContainerWrapperInputs>
                <WrapperInputs>
                  <label htmlFor="tags">Ingredientes</label>

                  <WrapperTags>
                    {tags.map((tag, index) => (
                      <TagContent key={String(index)}>
                        <span>{tag}</span>
                        <button
                          title="Excluir tag"
                          onClick={() => handleRemoveTag(tag)}
                        >
                          <AiOutlineClose size={20} color="#fff" />
                        </button>
                      </TagContent>
                    ))}

                    <AddTag>
                      <input
                        type="text"
                        placeholder="Adicionar"
                        value={newTags}
                        onChange={(e) => setNewTags(e.target.value)}
                      />

                      <button
                        title="Adicionar tag"
                        type="button"
                        onClick={handleAddTag}
                      >
                        <AiOutlinePlus size={20} color="#7C7C8A" />
                      </button>
                    </AddTag>
                  </WrapperTags>
                </WrapperInputs>

                <WrapperInputs>
                  <label htmlFor="price">Preço</label>

                  <Input
                    type="number"
                    id="price"
                    placeholder="R$ 00,00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </WrapperInputs>
              </ContainerWrapperInputs>

              <WrapperInputs>
                <label htmlFor="description">Descrição</label>

                <textarea
                  id="description"
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </WrapperInputs>

              <WrapperButtons>
                <Button
                  title="Excluir prato"
                  type="button"
                  onClick={handleDeleteDish}
                />
                <Button
                  title="Salvar alterações"
                  type="button"
                  onClick={handleAddNewDish}
                />
              </WrapperButtons>
            </form>
          </ContentNewDish>
        </Spacing>
      </ContainerNewDish>
      <Footer />
    </>
  );
}
