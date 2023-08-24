/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ContextState = createContext({});

export function ContextProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [dishSelected, setDishSelected] = useState([]);

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleCloseMenu() {
    setOpenMenu(false);
  }

  return (
    <ContextState.Provider
      value={{
        openMenu,
        handleOpenMenu,
        handleCloseMenu,
        search,
        setSearch,
        dishSelected,
        setDishSelected,
      }}
    >
      {children}
    </ContextState.Provider>
  );
}
