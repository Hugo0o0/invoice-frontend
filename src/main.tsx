import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "./components/context/ThemeContext.tsx";
import ModalContext from "./components/context/ModalContext.tsx";
import { AuthProvider } from "./components/context/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Theme>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
