import { useContext } from "react";
import { ContextState } from "../../../Context/ContextStates";
import { Input } from "../../Input";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ContainerMenuHeader, HeaderMenu, ContentMenu } from "./styles";
import { useAuth } from "../../../Context/AuthContext";
import { useAdminContext } from "../../../Context/IsAdmin";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const { handleCloseMenu, search, setSearch } = useContext(ContextState);
  const { isAdmin } = useAdminContext();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleCloseAndSignOut() {
    signOut();
    handleCloseMenu();
    navigate("/");
  }

  function handleNewDish() {
    navigate("/novo-prato");
    handleCloseMenu();
  }

  return (
    <>
      {isAdmin === true ? (
        <ContainerMenuHeader>
          <HeaderMenu>
            <div>
              <button title="Fechar menu" onClick={() => handleCloseMenu()}>
                <AiOutlineClose size={32} color="#fff" />
              </button>
              <h2>Menu</h2>
            </div>
          </HeaderMenu>
          <div>
            <ContentMenu>
              <Input
                icon={AiOutlineSearch}
                type="text"
                placeholder="Busque por pratos ou ingredientes"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button title="Novo prato" onClick={() => handleNewDish()}>
                <span>Novo prato</span>
              </button>
              <button title="Sair" onClick={handleCloseAndSignOut}>
                <span>Sair</span>
              </button>
            </ContentMenu>
          </div>
        </ContainerMenuHeader>
      ) : (
        <ContainerMenuHeader>
          <HeaderMenu>
            <div>
              <button title="Fechar menu" onClick={() => handleCloseMenu()}>
                <AiOutlineClose size={32} color="#fff" />
              </button>
              <h2>Menu</h2>
            </div>
          </HeaderMenu>
          <div>
            <ContentMenu>
              <Input
                icon={AiOutlineSearch}
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />

              <button title="Sair" onClick={handleCloseAndSignOut}>
                <span>Sair</span>
              </button>
            </ContentMenu>
          </div>
        </ContainerMenuHeader>
      )}
    </>
  );
}
