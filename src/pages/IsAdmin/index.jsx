/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";

import logoAdmim from "/assets/images/logo-admin.png";
import logoNormal from "/assets/images/logo.png";

import { useAuth } from "../../Context/AuthContext";

import { Button } from "../../components/Button";

import {
  ContainerIsAdmin,
  Spacing,
  Title,
  WrapperHomes,
  WrapperHandleLogout,
} from "./styles";
import { useAdminContext } from "../../Context/IsAdmin";
import { useEffect } from "react";

export function IsAdmin() {
  const { signOut } = useAuth();
  const { setIsAdmin } = useAdminContext();
  const navigate = useNavigate();

  function handleSigOut() {
    signOut();
    navigate("/");
  }

  useEffect(() => {
    setIsAdmin(JSON.parse(localStorage.getItem("@isAdmin:notAdmin")));
  }, []);

  function handleSetAdmin() {
    setIsAdmin(true);
  }

  function handleSetNotAdmin() {
    setIsAdmin(false);
  }

  return (
    <ContainerIsAdmin>
      <Spacing>
        <Title>
          Clique em uma logo para entrar como usuário administrador ou usuário
          comum:
        </Title>

        <WrapperHomes>
          <div>
            <h2>Entrar como administrador ?</h2>

            <button
              onClick={() => {
                handleSetAdmin(true);
                navigate("/home");
              }}
              title="Entrar como usuário administrador"
            >
              <img src={logoAdmim} alt="Logo admin" />
            </button>
          </div>
          <div>
            <h2>Entrar como usuário normal ?</h2>

            <button
              onClick={() => {
                handleSetNotAdmin(false);
                navigate("/home");
              }}
              title="Entrar como usuário normal"
            >
              <img src={logoNormal} alt="Logo usuário normal" />
            </button>
          </div>
        </WrapperHomes>

        <WrapperHandleLogout>
          <Button title="Voltar para tela de Login" onClick={handleSigOut} />
        </WrapperHandleLogout>
      </Spacing>
    </ContainerIsAdmin>
  );
}
