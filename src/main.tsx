import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "./components/context/ThemeContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ModalContext from "./components/context/ModalContext.tsx";
import { AuthProvider } from "./components/context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <AuthProvider>
          <ModalContext>
            <App />
          </ModalContext>
        </AuthProvider>
      </Theme>
    </Provider>
  </React.StrictMode>
);
