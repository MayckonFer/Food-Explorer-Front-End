import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme.js";
import { ContextProvider } from "./Context/ContextStates";
import { ContextAuthProvider } from "./Context/AuthContext.jsx";
import { AdminProvider } from "./Context/IsAdmin.jsx";
import { Routes } from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAuthProvider>
      <ContextProvider>
        <AdminProvider>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
          </ThemeProvider>
        </AdminProvider>
      </ContextProvider>
    </ContextAuthProvider>
  </React.StrictMode>
);
