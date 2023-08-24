import { useState } from "react";

import { ContainerSignUp, ContainerForm } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import logo from "/assets/images/logo.png";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    if (!name || !email || !password) return alert("Preencha todos os campos!");

    if (password < 6) return alert("Senha deve ter no minimo 6 caracteres");

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }

  return (
    <ContainerSignUp>
      <img src={logo} alt="" />

      <ContainerForm>
        <legend>Crie sua conta</legend>

        <div>
          <label htmlFor="name">Seu nome</label>
          <Input
            type="text"
            id="name"
            placeholder="Exemplo: Maria da Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </ContainerForm>
    </ContainerSignUp>
  );
}
