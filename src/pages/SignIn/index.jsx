import { ContainerSignIn, ContainerForm } from "./styles";

import logo from "/assets/images/logo.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault();

    if (password < 6) return alert("Senha deve ter no minimo 6 caracteres");

    signIn({ email, password });
  }

  return (
    <ContainerSignIn>
      <img src={logo} alt="" />

      <ContainerForm>
        <legend>Faça login</legend>

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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </ContainerForm>
    </ContainerSignIn>
  );
}
