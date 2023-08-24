/* eslint-disable react/jsx-no-duplicate-props */
import { ContainerHeader, ContainerDesktop, ContainerMobile } from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import logo from "/assets/images/logo.png";
import logoAdmin from "/assets/images/logo-admin.png";

import { Input } from "../Input";
import { Button } from "../Button";
import { Menu } from "./Menu";

import { useContext } from "react";
import { ContextState } from "../../Context/ContextStates";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../Context/IsAdmin";

export function Header() {
  const { openMenu, handleOpenMenu, search, setSearch } =
    useContext(ContextState);
  const { isAdmin } = useAdminContext();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <>
      {isAdmin === true ? (
        <ContainerHeader>
          <div>
            <ContainerMobile>
              <button onClick={() => handleOpenMenu()} title="Abrir menu">
                <GiHamburgerMenu size={32} color="#fff" />
              </button>

              <img src={logoAdmin} alt="Logo admin" />

              {openMenu === true ? <Menu /> : ""}
            </ContainerMobile>

            <ContainerDesktop>
              <img src={logoAdmin} alt="Logo Admin" />

              <Input
                icon={AiOutlineSearch}
                placeholder="Busque por pratos ou ingredientes"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button
                title="Novo prato"
                onClick={() => navigate("/novo-prato")}
              />

              <button title="Sair" onClick={handleSignOut}>
                <FiLogOut size={32} color="#fff" />
              </button>
            </ContainerDesktop>
          </div>
        </ContainerHeader>
      ) : (
        <ContainerHeader>
          <div>
            <ContainerMobile>
              <button onClick={() => handleOpenMenu()} title="Abrir menu">
                <GiHamburgerMenu size={32} color="#fff" />
              </button>

              <img src={logo} alt="" />

              <button title="Pedidos">
                <FaRegListAlt size={32} color="#fff" />
                <span>0</span>
              </button>

              {openMenu === true ? <Menu /> : ""}
            </ContainerMobile>

            <ContainerDesktop>
              <img src={logo} alt="" />

              <Input
                icon={AiOutlineSearch}
                placeholder="Busque por pratos ou ingredientes"
              />

              <Button title={`Pedidos (0)`}>
                <FaRegListAlt size={32} color="#fff" />
              </Button>

              <button title="Sair" onClick={handleSignOut}>
                <FiLogOut size={32} color="#fff" />
              </button>
            </ContainerDesktop>
          </div>
        </ContainerHeader>
      )}
    </>
  );
}
