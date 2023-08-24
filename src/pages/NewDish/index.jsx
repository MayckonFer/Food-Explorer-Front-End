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
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { api } from "../../services/api";

export function NewDish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [price, setPrice] = useState("");

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState("");
  const [nameAvatarFile, setNameAvatarFile] = useState("");

  const navigate = useNavigate();

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);
    setNameAvatarFile(file.name);

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

  async function handleAddNewDish() {
    if (
      !avatarFile ||
      !title ||
      tags.length === 0 ||
      !price ||
      !description ||
      !avatar
    ) {
      return alert("Preencha todos os campos obrigatórios.");
    }

    const formData = new FormData();
    formData.append("avatar", avatarFile);
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("tags", tags);

    const response = await api.post("/dishes", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      alert("Prato adicionado com sucesso!");
    } else {
      alert("Houve um problema ao adicionar o prato.");
    }

    setTimeout(() => {
      navigate("/home");
      window.location.reload();
    }, 500);
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
            <Title>Novo prato</Title>

            <form>
              <ContainerWrapperInputs>
                <UploadImagem>
                  <legend>Imagem do prato</legend>

                  <label htmlFor="upload_image">
                    <BsUpload size={24} color="#fff" />
                    {nameAvatarFile || "Selecione imagem"}

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
                    <option>Refeições</option>
                    <option>Sobremesas</option>
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

              <Button title="Salvar" type="button" onClick={handleAddNewDish} />
            </form>
          </ContentNewDish>
        </Spacing>
      </ContainerNewDish>
      <Footer />
    </>
  );
}
