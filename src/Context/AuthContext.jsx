/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

import { api } from "../services/api";

export function ContextAuthProvider({ children }) {
  const [data, setData] = useState({});
  const [dataDish, setDataDish] = useState(null);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
      localStorage.setItem("@FoodExplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token }, response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@FoodExplorer:token");
    const user = localStorage.getItem("@FoodExplorer:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  useEffect(() => {
    async function getInfosDish() {
      const userId = data.user ? data.user.id : null;

      const response = await api.get(`/dishes/${userId}`);

      setDataDish(response.data);
    }

    getInfosDish();
  }, [data.user]);

  // async function updateDish({ dish }) {
  //   try {
  //     await api.put("/dishes", { dish });
  //     localStorage.setItem("@FoodExplorer:user", JSON.stringify(dish));
  //     console.log(dish);

  //     setData({
  //       dish,
  //       token: data.token,
  //     });

  //     alert("Prato atualizado!");
  //   } catch (error) {
  //     if (error.response) {
  //       alert(error.response.data.message);
  //     } else {
  //       alert("Não foi possível atualizar o prato.");
  //     }
  //   }
  // }

  function signOut() {
    localStorage.removeItem("@FoodExplorer:token");
    localStorage.removeItem("@FoodExplorer:user");

    setData({});
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        // updateDish,
        user: data.user,
        signOut,
        dataDish,
        setDataDish,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth };
